import React from 'react';

function App() {
  return (
    <div className="font-sans p-8 max-w-xl mx-auto bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">私のポートフォリオ</h1>
      <p className="mb-6 text-gray-700">こんにちは！私はNaomiです。Web開発が大好きで、ReactやTypeScriptを使ったフロントエンド開発を中心に活動しています。</p>
      <h2 className="text-xl font-semibold mb-2 text-gray-800">スキル</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>React</li>
        <li>TypeScript</li>
        <li>HTML / CSS</li>
        <li>Node.js</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 text-gray-800">連絡先</h2>
      <p className="text-gray-700">Email: <a href="mailto:naomi@example.com" className="text-blue-500 underline">naomi@example.com</a></p>
    </div>
  );
}

export default App;
