"use client";

import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Code2,
  Image,
  Link2,
  Download,
  Code,
  type LucideIcon,
} from "lucide-react";

type ToolbarProps = {
  onBold: () => void;
  onItalic: () => void;
  onH1: () => void;
  onH2: () => void;
  onExport: () => void;
  onlist: () => void;
  onOrderList: () => void;
  onImage: () => void;
  onQuote: () => void;
  onLink: () => void;
  onSourceCode: () => void;
  onCode: () => void;
};

type ToolItem = {
  icon: LucideIcon;
  label: string;
  action: () => void;
};

export default function Toolbar({
  onBold,
  onItalic,
  onH1,
  onH2,
  onExport,
  onSourceCode,
  onlist,
  onOrderList,
  onCode,
  onLink,
  onImage,
  onQuote,
}: ToolbarProps) {
  const tools: ToolItem[] = [
    { icon: Heading1, label: "H1", action: onH1 },
    { icon: Heading2, label: "H2", action: onH2 },
    { icon: Bold, label: "Bold", action: onBold },
    { icon: Italic, label: "Italic", action: onItalic },
    { icon: List, label: "List", action: onlist },
    { icon: ListOrdered, label: "Ordered List", action: onOrderList },
    { icon: Quote, label: "Quote", action: onQuote },
    { icon: Code2, label: "Code Block", action: onCode },
    { icon: Image, label: "Image", action: onImage },
    { icon: Link2, label: "Link", action: onLink },
  ];

  const actions: ToolItem[] = [
    { icon: Download, label: "Export", action: onExport },
    { icon: Code, label: "Source Code", action: onSourceCode },
  ];

  return (
    <header className="w-full border-b border-zinc-800 bg-zinc-950 px-4 py-3">
      <div className="flex items-center justify-between gap-4">

        {/* LOGO */}
        <span className="font-mono text-2xl text-white tracking-tight">
          Markio
        </span>

        {/* TOOLBAR */}
        <div className="flex items-center gap-6">

          {/* EDITOR TOOLS */}
          <div className="flex items-center gap-2">
            {tools.map((tool) => (
              <ToolbarButton
                key={tool.label}
                Icon={tool.icon}
                label={tool.label}
                onClick={tool.action}
              />
            ))}
          </div>

          {/* ACTION TOOLS */}
          <div className="flex items-center gap-2 border-l border-zinc-800 pl-6">
            {actions.map((tool) => (
              <ToolbarButton
                key={tool.label}
                Icon={tool.icon}
                label={tool.label}
                onClick={tool.action}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

type ToolbarButtonProps = {
  Icon: LucideIcon;
  label: string;
  onClick: () => void;
};

function ToolbarButton({ Icon, label, onClick }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      title={label}
      onClick={onClick}
      className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 transition-all duration-200 hover:bg-zinc-800 hover:text-white active:scale-95"
    >
      <Icon size={18} strokeWidth={2} />

      {/* TOOLTIP */}
      <span
        suppressHydrationWarning
        className="pointer-events-none absolute -bottom-10 whitespace-nowrap rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      >
        {label}
      </span>
    </button>
  );
}