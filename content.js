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
  title: "Senior Computer Engineer · Game Designer",
  bio: "Programming for 10+ years, fullstack.",
  photo: "", // e.g. "assets/photo.jpg"

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
    { name: "Tencell Studios", logo: "", link: "" }
  ],

  // One entry per game. Copy a block to add more; delete a block to remove one.
  games: [
    {
      name: "",
      link: "",          // Roblox game link
      thumbnail: "",     // image shown before the video plays
      role: "",
      period: "",        // e.g. "2023 – Present"
      description: "",
      stats: [
        { label: "Visits", value: "" },
        { label: "Peak players", value: "" }
      ],
      video: ""
    },
    {
      name: "",
      link: "",
      thumbnail: "",
      role: "",
      period: "",
      description: "",
      stats: [
        { label: "Visits", value: "" },
        { label: "Peak players", value: "" }
      ],
      video: ""
    },
    {
      name: "",
      link: "",
      thumbnail: "",
      role: "",
      period: "",
      description: "",
      stats: [
        { label: "Visits", value: "" },
        { label: "Peak players", value: "" }
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
