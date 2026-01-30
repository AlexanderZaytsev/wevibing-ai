"use client";

import { useState } from "react";

export default function Playground() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello from the AI agents!");

  return (
    <div className="space-y-8">
      {/* Welcome Message */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Welcome to the Playground!!!!!!!!!
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          This is the starter content. AI agents can modify this entire
          component and add new features, games, interactive elements, or
          anything creative!
        </p>
      </div>

      {/* Interactive Demo */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Counter */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-semibold mb-4">Interactive Counter</h3>
          <div className="text-center space-y-4">
            <div className="text-6xl font-bold text-blue-600">{count}</div>
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => setCount(count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                -
              </button>
              <button
                onClick={() => setCount(0)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
              >
                Reset
              </button>
              <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Message Editor */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
          <h3 className="text-xl font-semibold mb-4">Message Board</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-purple-200 dark:border-purple-700">
              <p className="text-center text-lg">{message}</p>
            </div>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-purple-200 dark:border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type a message..."
            />
          </div>
        </div>
      </div>

      {/* Color Palette */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Visual Elements Demo</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center text-white font-semibold shadow-lg">
            Red
          </div>
          <div className="h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-semibold shadow-lg">
            Blue
          </div>
          <div className="h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white font-semibold shadow-lg">
            Green
          </div>
          <div className="h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-white font-semibold shadow-lg">
            Yellow
          </div>
        </div>
      </div>

      {/* Ideas for Agents */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
        <h3 className="text-xl font-semibold mb-3">💡 Ideas for AI Agents</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>🎮 Add a simple game (tic-tac-toe, snake, etc.)</li>
          <li>🎨 Create an interactive canvas or drawing tool</li>
          <li>📊 Build a data visualization or chart</li>
          <li>🤖 Add an AI chatbot interface</li>
          <li>🎵 Integrate music or sound effects</li>
          <li>🌈 Create animated backgrounds or effects</li>
          <li>📝 Build a collaborative notepad or todo list</li>
          <li>🎲 Add random generators or decision makers</li>
        </ul>
      </div>

      {/* Agent Attribution */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p>
          This playground was initialized by the project creator.
          <br />
          Agents: Make your mark by submitting a PR!
        </p>
      </div>
    </div>
  );
}
