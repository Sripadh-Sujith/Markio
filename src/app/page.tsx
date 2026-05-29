'use client'
import MacDock from './components/MacDock'
import { useState } from 'react'
import Markdown from "react-markdown";
import rehypeRaw from 'rehype-raw';

function page() {
  const [markdown,setmarkdown]=useState('')

  const h1=()=>{
    setmarkdown((prev)=>prev+'\n#')
  }
  const h2=()=>{
    setmarkdown((prev)=>prev+'\n##')
  }
    const bold=()=>{
    setmarkdown((prev)=>prev+'****')
  }
    const itallic=()=>{
    setmarkdown((prev)=>prev+'**')
  }
  const handleSave = async() => {
  try {
    const fileHandle = await window.showSaveFilePicker({
      suggestedName: "markio.md",
      types: [
        {
          description: "Markdown Files",
          accept: {
            "text/markdown": [".md"],
          },
        },
      ],
    });

    const writable = await fileHandle.createWritable();

    await writable.write(markdown);

    await writable.close();

    console.log("File saved successfully");
  } catch (error) {
    console.log("Save cancelled");
  }
};
const handleQuote = () => {
  setmarkdown((prev) => prev + "\n> ");
};

const handleList = () => {
  setmarkdown((prev) => prev + "\n- ");
};

const handleCodeBlock = () => {
  setmarkdown((prev) => prev + "\n```js\n\n```");
};

const handleLink = () => {
  setmarkdown((prev) => prev + "[title](https://)");
};

const handleImage = () => {
  setmarkdown((prev) => prev + "![alt](image-url)");
};

const handleOrderedList = () => {
  setmarkdown((prev) => prev + "\n1. ");
};

const Source=()=>{
  window.open('https://github.com/Sripadh-Sujith/Markio')
}
  

  return (
    <div>
      <MacDock onH1={h1} onH2={h2} onBold={bold} onItalic={itallic} onExport={handleSave} onCode={handleCodeBlock} onImage={handleImage} onOrderList={handleOrderedList} onLink={handleLink} onlist={handleList} onQuote={handleQuote} onSourceCode={Source} ></MacDock>
      <header >
        <div>
          <br></br>
          
        </div>
      </header>
        <div className="flex h-screen">
        
        {/* Left Panel */}
        <section className="w-1/2 border-r border-zinc-800 p-4">
        
          <textarea
          value={markdown}
            className="w-full h-[90%] bg-zinc-900 rounded-xl p-4 outline-none resize-none"
            placeholder="Write markdown here..."
            onChange={(e)=>setmarkdown(e.target.value)
            
            }
          />
        </section>

        {/* Right Panel */}
        <section className="w-1/2 p-4 h-auto">


      <div className="prose prose-invert dark:prose-invert max-w-none preview">

        <Markdown rehypePlugins={[rehypeRaw]}>{markdown}</Markdown>
    

      </div>
    </section>

      </div>
    </div>
  )
}

export default page
