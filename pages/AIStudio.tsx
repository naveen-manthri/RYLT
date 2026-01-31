import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Loader2, Video, Image as ImageIcon, Upload, Play, RefreshCw } from 'lucide-react';
import SEO from '../components/SEO';

const AIStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'video' | 'image'>('video');
  
  // Veo State
  const [videoImage, setVideoImage] = useState<string | null>(null);
  const [videoMimeType, setVideoMimeType] = useState<string>('');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
  const [videoStatus, setVideoStatus] = useState<string>('');

  // Image Gen State
  const [imagePrompt, setImagePrompt] = useState('');
  const [imageSize, setImageSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);

  // Common Helpers
  const checkApiKey = async () => {
    // @ts-ignore
    if (!window.aistudio) return false;
    // @ts-ignore
    const hasKey = await window.aistudio.hasSelectedApiKey();
    if (!hasKey) {
       // @ts-ignore
       await window.aistudio.openSelectKey();
       // Race condition mitigation: assume success if dialog closes, but we re-check logic in flow usually
       return true; 
    }
    return true;
  };

  const getAIClient = () => {
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  };

  // Veo Logic
  const handleVideoImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = (reader.result as string).split(',')[1];
        setVideoImage(base64String);
        setVideoMimeType(file.type);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateVideo = async () => {
    if (!videoImage) return;
    setGeneratedVideoUrl(null);
    setVideoStatus('Initializing...');
    
    try {
      await checkApiKey();
      const ai = getAIClient();
      setIsGeneratingVideo(true);

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        image: {
          imageBytes: videoImage,
          mimeType: videoMimeType,
        },
        config: {
          numberOfVideos: 1,
          aspectRatio: aspectRatio,
          // Resolution is fixed for this model usually, but let's stick to minimal config required
        }
      });

      setVideoStatus('Generating video... (this may take a moment)');
      
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5s
        operation = await ai.operations.getVideosOperation({operation: operation});
      }

      if (operation.response?.generatedVideos?.[0]?.video?.uri) {
        const downloadLink = operation.response.generatedVideos[0].video.uri;
        const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await response.blob();
        setGeneratedVideoUrl(URL.createObjectURL(blob));
      } else {
        setVideoStatus('Failed to generate video.');
      }

    } catch (error) {
      console.error(error);
      setVideoStatus('Error occurred. Please try again.');
    } finally {
      setIsGeneratingVideo(false);
    }
  };

  // Image Gen Logic
  const generateImage = async () => {
    if (!imagePrompt.trim()) return;
    setGeneratedImageUrl(null);
    
    try {
      await checkApiKey();
      const ai = getAIClient();
      setIsGeneratingImage(true);

      // Using gemini-3-pro-image-preview for high quality generation
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: imagePrompt }]
        },
        config: {
          imageConfig: {
            imageSize: imageSize
            // Aspect ratio defaults to 1:1 if not set, let's keep it simple or add selector if needed, 
            // but prompt only asked for Size 1K/2K/4K
          }
        }
      });

      // Extract image
      const candidates = response.candidates;
      if (candidates && candidates.length > 0) {
        for (const part of candidates[0].content.parts) {
          if (part.inlineData) {
            const base64 = part.inlineData.data;
            const mime = part.inlineData.mimeType || 'image/png';
            setGeneratedImageUrl(`data:${mime};base64,${base64}`);
            break;
          }
        }
      }

    } catch (error) {
      console.error(error);
      alert('Failed to generate image. Please ensure you have a valid API key.');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-500 min-h-screen bg-gray-50">
      <SEO 
        title="AI Studio" 
        description="Create stunning visuals and videos for energy solutions using RYLT AI Studio powered by Google Gemini and Veo." 
      />
      <div className="bg-gradient-to-r from-rylt-black to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block p-3 bg-white/10 rounded-full mb-4">
             <RefreshCw className="animate-spin-slow" size={32} />
          </div>
          <h1 className="text-4xl font-bold mb-4">RYLT AI Studio</h1>
          <p className="text-gray-300 text-lg">Create stunning visuals and videos powered by Google Gemini & Veo.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-200 inline-flex">
            <button
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'video' ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <Video size={18} /> Video Generator (Veo)
            </button>
            <button
              onClick={() => setActiveTab('image')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'image' ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <ImageIcon size={18} /> Image Generator
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-h-[500px]">
          
          {/* Video Tab */}
          {activeTab === 'video' && (
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">1. Upload Source Image</h3>
                    <p className="text-sm text-gray-500 mb-4">Upload a photo to bring to life.</p>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-rylt-green transition-colors bg-gray-50">
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleVideoImageUpload}
                        className="hidden" 
                        id="video-upload" 
                      />
                      <label htmlFor="video-upload" className="cursor-pointer flex flex-col items-center">
                        {videoImage ? (
                          <div className="relative">
                            <img 
                              src={`data:${videoMimeType};base64,${videoImage}`} 
                              alt="Preview" 
                              className="max-h-48 rounded-lg shadow-sm"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                              Change Image
                            </div>
                          </div>
                        ) : (
                          <>
                            <Upload className="text-gray-400 mb-2" size={32} />
                            <span className="text-gray-600 font-medium">Click to upload</span>
                            <span className="text-xs text-gray-400 mt-1">JPG, PNG supported</span>
                          </>
                        )}
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">2. Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Aspect Ratio</label>
                        <select 
                          value={aspectRatio}
                          onChange={(e) => setAspectRatio(e.target.value as any)}
                          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rylt-green focus:outline-none"
                        >
                          <option value="16:9">Landscape (16:9)</option>
                          <option value="9:16">Portrait (9:16)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={generateVideo}
                    disabled={!videoImage || isGeneratingVideo}
                    className="w-full bg-rylt-green text-black font-bold py-4 rounded-xl hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    {isGeneratingVideo ? <Loader2 className="animate-spin" /> : <Play size={20} />}
                    {isGeneratingVideo ? 'Generating Video...' : 'Generate Video'}
                  </button>
                  
                  {isGeneratingVideo && (
                    <div className="p-4 bg-blue-50 text-blue-700 rounded-lg text-sm">
                       {videoStatus}
                    </div>
                  )}
                </div>

                <div className="bg-black/5 rounded-xl flex items-center justify-center min-h-[400px]">
                  {generatedVideoUrl ? (
                    <div className="w-full p-4">
                      <video 
                        src={generatedVideoUrl} 
                        controls 
                        autoPlay 
                        loop 
                        className="w-full rounded-lg shadow-2xl"
                      />
                      <div className="mt-4 text-center">
                        <a 
                          href={generatedVideoUrl} 
                          download="rylt-veo-video.mp4"
                          className="text-rylt-green font-bold hover:underline"
                        >
                          Download Video
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400 p-8">
                       <Video size={48} className="mx-auto mb-4 opacity-20" />
                       <p>Generated video will appear here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Image Tab */}
          {activeTab === 'image' && (
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Describe your image</h3>
                    <textarea
                      value={imagePrompt}
                      onChange={(e) => setImagePrompt(e.target.value)}
                      placeholder="E.g., A futuristic heat pump in a snowy landscape, photorealistic, 4k..."
                      className="w-full h-32 p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rylt-green focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">Resolution</h3>
                    <div className="flex gap-4">
                       {(['1K', '2K', '4K'] as const).map((size) => (
                         <button
                           key={size}
                           onClick={() => setImageSize(size)}
                           className={`flex-1 py-3 rounded-lg font-bold border transition-all ${
                             imageSize === size 
                               ? 'border-rylt-green bg-green-50 text-rylt-green' 
                               : 'border-gray-200 text-gray-500 hover:border-gray-300'
                           }`}
                         >
                           {size}
                         </button>
                       ))}
                    </div>
                  </div>

                  <button
                    onClick={generateImage}
                    disabled={!imagePrompt.trim() || isGeneratingImage}
                    className="w-full bg-rylt-green text-black font-bold py-4 rounded-xl hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    {isGeneratingImage ? <Loader2 className="animate-spin" /> : <ImageIcon size={20} />}
                    {isGeneratingImage ? 'Generating Image...' : 'Generate Image'}
                  </button>
                  
                  <div className="text-xs text-gray-400 mt-2">
                    Powered by gemini-3-pro-image-preview
                  </div>
                </div>

                <div className="bg-black/5 rounded-xl flex items-center justify-center min-h-[400px]">
                   {generatedImageUrl ? (
                    <div className="w-full p-4 relative group">
                      <img 
                        src={generatedImageUrl} 
                        alt="Generated" 
                        className="w-full h-auto rounded-lg shadow-2xl"
                      />
                      <div className="mt-4 text-center">
                         <a 
                          href={generatedImageUrl} 
                          download="rylt-generated-image.png"
                          className="text-rylt-green font-bold hover:underline"
                        >
                          Download Image
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400 p-8">
                       <ImageIcon size={48} className="mx-auto mb-4 opacity-20" />
                       <p>Generated image will appear here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIStudio;