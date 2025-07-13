import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export default function DockDemo() {
  const links = [
    {
      title: "VS Code",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          width={20}
          height={20}
          alt="VS Code"
        />
      ),
      href: "#",
    },
    {
      title: "Notion",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
          width={20}
          height={20}
          alt="Notion"
        />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <img
          src="https://www.svgrepo.com/show/439171/github.svg"
          width={30}
          height={30}
          alt="GitHub"
        />
      ),
      href: "#",
    },
    {
      title: "PostgreSQL",
      icon: (
        <img
          src="https://www.svgrepo.com/show/354200/postgresql.svg"
          width={30}
          height={30}
          alt="PostgreSQL"
        />
      ),
      href: "#",
    },
    {
      title: "Discord",
      icon: (
        <img
          src="https://www.svgrepo.com/show/353655/discord-icon.svg"
          width={20}
          height={20}
          alt="Discord"
        />
      ),
      href: "#",
    },
    {
      title: "Postman",
      icon: (
        <img
          src="https://www.svgrepo.com/show/354202/postman-icon.svg"
          width={20}
          height={20}
          alt="Postman"
        />
      ),
      href: "#",
    },
    {
      title: "Chrome",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg"
          width={20}
          height={20}
          alt="Chrome"
        />
      ),
      href: "#",
    },
    {
      title: "Docker",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          width={20}
          height={20}
          alt="Docker"
        />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
