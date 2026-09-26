/*
  JCLDEV portfolio content.
  Everything shown on the site comes from this file, so this is the only file
  you need to edit to add games, videos and images.

  Leave a value as "" to show an empty placeholder slot for it.

  Videos: paste a YouTube or Streamable link, or a path to an .mp4 file you put
  in the assets folder (for example "assets/videos/combat-system.mp4").
  Images: a path in the assets folder (for example "assets/ui/shop-menu.png")
  or a full https:// link.
*/
window.SITE = {
  name: "JCLDEV",
  title: "Computer Engineer · UI/UX Designer · Game Designer",
  bio: "Programming for 10+ years, fullstack.",
  photo: "assets/photo.jpg", // e.g. "assets/photo.jpg"

  highlights: [
    { value: "10+", label: "Years programming" },
    { value: "Fullstack", label: "Engineering" }
  ],

  skills: [
    { name: "Programming", description: "" },
    { name: "UI/UX Design", description: "" },
    { name: "Game Design", description: "" }
  ],

  workedWith: [
    { name: "Tencell Studios", logo: "", link: "https://tencellstudios.com/" },
    { name: "Splitbrick Studio", logo: "", link: "https://www.splitbrickstudio.com/" }
  ],

  // One entry per game. Copy a block to add more; delete a block to remove one.
  games: [
    {
      link: "https://www.roblox.com/games/6403373529/Slap-Battles",          // Roblox game link
      role: "Producer, Lead Programmer, Game Design",
      stats: [
        { label: "Peak players", value: "150,000+" }
      ],
      video: ""
    },
    {
      link: "https://www.roblox.com/games/18799085098/Hide-or-OOF",
      role: "Programmer",
      stats: [,
        { label: "Peak players", value: "60,000+" }
      ],
      video: ""
    },
    {
      link: "https://www.roblox.com/games/13278651209/Pet-Store-Tycoon-2",
      role: "Lead Programmer",
      stats: [
        { label: "Peak players", value: "2,000+" }
      ],
      video: ""
    },
    {
      link: "https://www.roblox.com/games/12981384028/Sword-Swing-Simulator",
      role: "Lead Programmer",
      stats: [
        { label: "Peak players", value: "8,000+" }
      ],
      video: ""
    }
  ],

  // Showcase of your work, split into tabs. Each item can have a video, an image, or both.
  showcase: [
    {
      tab: "Programming",
      items: [
        { title: "", caption: "", video: "", image: "" },
        { title: "", caption: "", video: "", image: "" },
        { title: "", caption: "", video: "", image: "" }
      ]
    },
    {
      tab: "UI/UX Design",
      items: [
        { title: "", caption: "", video: "", image: "" },
        { title: "", caption: "", video: "", image: "" },
        { title: "", caption: "", video: "", image: "" }
      ]
    }
  ],

  tools: [
    { group: "Roblox development", items: ["Roblox Studio", "Rojo", "Wally"] },
    { group: "Code", items: ["VS Code", "Git + GitHub"] },
    { group: "Design", items: ["Figma", "Affinity"] },
    { group: "Planning", items: ["Confluence", "Jira", "Trello", "Notion", "Linear"] },
    { group: "Office", items: ["PowerPoint", "Excel", "Word"] },
    { group: "Communication", items: ["Discord"] }
  ],

  commissions: "Contact me for info.",

  contact: {
    discord: "jcl.",
    email: "joshuaclarke.lua@gmail.com",
    roblox: { name: "JCLDEV", url: "https://www.roblox.com/users/70480254/profile" },
    creatorHub: "https://create.roblox.com/talent/creators/70480254"
  }
};
