import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaRegCopy } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { CiCircleInfo } from "react-icons/ci";
import CodeBlock from "../../components/code-blocks/CodeBlock";

const ComponentLayout = ({ filePath, Component }) => {
  const [showOutput, setShowOutput] = useState(true);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchFileContent = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/file/${filePath}`);
      if (!response.ok) {
        throw new Error('Failed to fetch file');
      }
      const data = await response.json();
      setContent(data.contents);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFileContent();
  }, []);

  return (
    <div className="w-8/12 border border-gray-300 overflow-hidden">
      <div className="flex items-center p-4 bg-gray-100 border-b border-gray-300 justify-between">
        <div className="flex justify-center items-center">
          <span className="flex-grow font-semibold">App.js</span>
          <button className="ml-2 text-gray-600 hover:text-gray-800">
            <CiCircleInfo size={20}/>
          </button>
          <button className="ml-2 text-gray-600 hover:text-gray-800">
            <FaRegCopy size={20}/>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <span className="font-extrabold">Expo</span>
          <button className="ml-2 text-gray-600 hover:text-gray-800">
            <RxOpenInNewWindow size={20}/>
          </button>
          <button
            className="ml-2 text-gray-600 hover:text-gray-800"
            onClick={() => setShowOutput(!showOutput)}
          >
            {showOutput ? <FaEyeSlash size={20}/> : <FaEye size={20}/>}
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row min-h-[600px]">
        <div className="flex-grow w-7/12">
          <div className="bg-gray-100 h-full overflow-scroll">
            {loading ? <p>Loading...</p> : <CodeBlock code={content} />}
            {error && <p>Error: {error}</p>}
          </div>
        </div>
        {showOutput && (
          <div className="max-w-[350px] w-5/12 border-l border-gray-300">
            <div className="h-full">
                <Component/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentLayout;
