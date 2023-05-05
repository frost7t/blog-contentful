import React from 'react'

export default function CardMenu() {
  return (
    <div>
      <div className="mb-3">
        <h1 className="font-bold text-xl">Catégorie</h1>
      </div>
      <div class="flex flex-col items-start gap-2">
        <span class="relative w-64 my-2">
          Illustation
          <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-200 opacity-80"></span>
        </span>
        <span class="relative w-64 my-2">
          Branding
          <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-200 opacity-80"></span>
        </span>
        <span class="relative w-64 my-2">
          Application
          <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-200 opacity-80"></span>
        </span>
        <span class="relative w-64 my-2">
          Design
          <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-200 opacity-80 "></span>
        </span>
        <span class="relative w-64 my-2">Marketing</span>
      </div>
    </div>
  );
}
