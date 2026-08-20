'use client';

import { useState, useEffect } from 'react';
import { X, Save, Download, RefreshCw, FileCode, CheckCircle } from 'lucide-react';

export default function CmsEditorModal({ data, onUpdateData, onClose }) {
  const [jsonString, setJsonString] = useState('');
  const [error, setError] = useState(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (data) {
      setJsonString(JSON.stringify(data, null, 2));
    }
  }, [data]);

  const handleSave = () => {
    try {
      const parsed = JSON.parse(jsonString);
      onUpdateData(parsed);
      setError(null);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2500);
    } catch (err) {
      setError('Invalid JSON syntax: ' + err.message);
    }
  };

  const handleDownload = () => {
    try {
      JSON.parse(jsonString); // validate
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'portfolio-data.json';
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError('Invalid JSON syntax. Cannot download.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
      <div className="bg-[#141417] border border-[#1f1f23] rounded-2xl max-w-4xl w-full h-[85vh] flex flex-col shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#1f1f23] flex items-center justify-between bg-[#0f0f11]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <FileCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg text-white">
                Local CMS - Live JSON Editor
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                Editing: <span className="text-cyan-400">public/data/portfolio-data.json</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1f1f23] text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Alerts */}
        {error && (
          <div className="bg-red-500/10 border-b border-red-500/30 px-6 py-2.5 text-xs text-red-400 font-mono">
            {error}
          </div>
        )}
        {savedSuccess && (
          <div className="bg-emerald-500/10 border-b border-emerald-500/30 px-6 py-2.5 text-xs text-emerald-400 font-mono flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>Changes applied live to portfolio UI!</span>
          </div>
        )}

        {/* JSON Code Editor Area */}
        <div className="flex-1 p-4 bg-[#09090b]">
          <textarea
            value={jsonString}
            onChange={e => {
              setJsonString(e.target.value);
              setError(null);
            }}
            className="w-full h-full bg-transparent text-gray-200 font-mono text-xs sm:text-sm p-4 focus:outline-none resize-none leading-relaxed selection:bg-blue-600/40"
            spellCheck="false"
          />
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 border-t border-[#1f1f23] bg-[#0f0f11] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-gray-500 font-mono">
            Directly edits UI text, numbers, translations & links.
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="px-4 py-2.5 rounded-xl bg-[#1f1f23] hover:bg-[#2a2a32] text-gray-200 text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download updated JSON</span>
            </button>

            <button
              onClick={handleSave}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
            >
              <Save className="w-4 h-4" />
              <span>Apply Changes Live</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
