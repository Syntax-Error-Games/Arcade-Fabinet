// =====================================================================
// CABINETS — the arcade's game library.
//
// This is the ONLY file you need to edit to add, remove or reorder games.
// Keep it in the same folder as index.html.
//
// Each entry is one physical machine:
//
//   id, title, tagline   name shown on the marquee and CRT
//   accent               its trim / marquee / CRT colour (0xRRGGBB)
//   x, z                 where it stands on the floor
//   rotY                 which way it faces (0 = toward you, Math.PI/2 = toward +x)
//   where                label used on the floor map
//   games                the list of games on that machine
//
// Each game is   { title: "Pac-Man", file: "games/pac-man/index.html" }
// plus optional flags:
//   pinBottom: true   always sorts to the end of its own cabinet (e.g. Credits)
//   external:  true   opens in a new tab (for sites that refuse to be framed)
//   id: "pac-man"     a stable key for stats / tickets / achievements. Defaults
//                     to the title; set it before you ever rename a game so
//                     players keep their history.
//
// To add a game: drop one line into the `games` list you want.
// To add a whole new genre: copy a cabinet block, give it a fresh id, title,
// accent and a free x/z spot on the floor.
// =====================================================================
window.ARCADE_CABINETS = [
    {
      id:'arcade', title:'ARCADE', tagline:'PIXEL PERFECT CLASSICS',
      accent:0xffe600, x:-4.6, z:-5.2, rotY:0, where:'BACK WALL',
      games:[
        { title: "Asteroids", file: "games/asteroids/index.html" },
        { title: "Breakout", file: "games/breakout/index.html" },
        { title: "Centipede", file: "games/centipede/index.html" },
        { title: "Computer Space", file: "games/computer-space/index.html" },
        { title: "Defender", file: "games/defender/index.html" },
        { title: "Galaxian", file: "games/galaxian/index.html" },
        { title: "Gun Fight", file: "games/gun-fight/index.html" },
        { title: "Lunar Lander", file: "games/lunar-lander/index.html" },
        { title: "Missile Command", file: "games/missile-command/index.html" },
        { title: "Pac-Man", file: "games/pac-man/index.html" },
        { title: "Pong", file: "games/pong/index.html" },
        { title: "Space Invaders", file: "games/space-invaders/index.html" }
      ]
    },
    {
      id:'action', title:'ACTION', tagline:'RUN AND GUN',
      accent:0xff5a1f, x:-2.3, z:-5.2, rotY:0, where:'BACK WALL',
      games:[
        { title: "Ultrakill", file: "https://ubghyper.github.io/GameList.github.io/Ultrakill/" },
        { title: "Nightfall", file: "games/nightfall-fps.html" },
        { title: "Jetpack Joyride", file: "https://emulatoros.github.io/gfile/jetpackjoyride/" },
        { title: "Neon Chamber", file: "games/NeonChamber.html" },
        { title: "Doodle Shooter", file: "https://dbestvarun.github.io/doodle-game/" },
        { title: "Shooter Game", file: "games/ShooterGame.html" },
        { title: "Tomb of the Mask", file: "https://ubghyper.github.io/GameList.github.io/Tomb-of-the-Mask/" },
        { title: "Stickman Hook", file: "https://ubghyper.github.io/GameList.github.io/Stickman-Hook/" }
      ]
    },
    {
      id:'racing', title:'RACING', tagline:'WHEELS AND SPEED',
      accent:0xff2bd6, x:0, z:-5.2, rotY:0, where:'BACK WALL',
      games:[
        { title: "Mario Kart",        file: "https://ubghyper.github.io/GameList.github.io/MarioKart/" },
        { title: "Turbo Kart",        file: "https://bridge-mind.github.io/turbo-kart-rush/" },
        { title: "Rocket Arena",        file: "games/rocket-arena-3v3.html" },
        { title: "Apex Formula",        file: "https://bridge-mind.github.io/apex-formula/" },
        { title: "Polytrack",         file: "https://ubghyper.github.io/GameList.github.io/Polytrack-New/" },
        { title: "Drive Mad",         file: "https://anonymousbirb5100.github.io/drive-mad/" },
        { title: "Drift Boss",        file: "https://ubghyper.github.io/GameList.github.io/Drift-Boss/" },
        { title: "MotoX3M",           file: "https://ubghyper.github.io/GameList.github.io/Moto3XM/" },
        { title: "Jelly Drift",       file: "https://ubghyper.github.io/GameList.github.io/Jelly-Drift/" },
      ]
    },
    {
      id:'adventure', title:'ADVENTURE', tagline:'JUMP AND EXPLORE',
      accent:0x39ff14, x:2.3, z:-5.2, rotY:0, where:'BACK WALL',
      games:[
        { title: "Hollow Knight", file: "https://ubghyper.github.io/GameList.github.io/hollowknight/" },
        { title: "Deepest Sword", file: "https://mathv2official.github.io/projects/deepestsword/index.html" },
        { title: "Pokemon Clone", file: "https://syntax-error-games.github.io/2026Q1_Fakemon/" },
        { title: "Level Devil", file: "https://ubghyper.github.io/GameList.github.io/Level-Devil/" },
        { title: "Platformer", file: "games/Platformer.html" },
        { title: "Crossy Farm", file: "games/crossy-farm-car/index.html" },
        { title: "Flappy Bird", file: "games/flappy-bird/index.html" },
        { title: "Mario 1-1", file: "games/mario-1-1/index.html" },
        { title: "Subway Runner", file: "games/subway-runner/index.html" }
      ]
    },
    {
      id:'sandbox', title:'SANDBOX', tagline:'BUILD ANYTHING',
      accent:0x22e0ff, x:4.6, z:-5.2, rotY:0, where:'BACK WALL',
      games:[
        { title: "Minecraft", file: "https://ubghyper.github.io/GameList.github.io/Eaglercraft/" },
        { title: "Voxelcraft", file: "games/voxelcraft.html" },
        { title: "Terraria", file: "https://ubghyper.github.io/GameList.github.io/Terraria/" },
        { title: "Sandvoxels", file: "https://freeonlinewebtools.github.io/UnblockedGamesUltra.github.io/" },
        { title: "Townscaper", file: "https://ubghyper.github.io/GameList.github.io/Townscaper/" },
        { title: "Gravity Simulator", file: "games/GravitySim.html" },
        { title: "Terraria Sandbox", file: "games/terraria-sandbox/index.html" },
        { title: "Voxel GTA City", file: "games/voxel-gta-city/index.html" },
        { title: "GTA6 Leonida City", file: "games/GTA6-Leonida.html" }
      ]
    },
    // The next four machines continue the loop around the room's perimeter —
    // right wall back-to-front, then a single hop across the open front of
    // the room, then left wall front-to-back — rather than jumping corner to
    // corner. Cycling with the nav buttons / arrow keys / joystick swipe
    // follows this exact array order.
    {
      id:'toybox', title:'TOY BOX', tagline:'ODDS AND ENDS',
      accent:0xb060e0, x:5.3, z:-2.4, rotY:-Math.PI/2, where:'RIGHT WALL',
      games:[
        { title: "Open in About Blank", file: "games/AboutBlank.html" },
        { title: "Cookie Clicker", file: "https://ozh.github.io/cookieclicker/" },
        { title: "Clicker Game", file: "games/ClickerGame.html" },
        { title: "Name Generator", file: "games/NameGenerator.html" },
        { title: "Die Roller", file: "games/DiceRoller.html" },
        { title: "Robot Tennis", file: "games/robot-tennis/index.html" }
      ]
    },
    {
      id:'portals', title:'PORTALS', tagline:'LINKS OUT',
      accent:0x00e5a0, x:5.3, z:0.2, rotY:-Math.PI/2, where:'RIGHT WALL',
      games:[
        { title: "Seraph", file: "https://crimsondev1.github.io/seraph/games/index.html" },
        { title: "Math V2", file: "https://mathv2official.github.io/projects.html" },
        { title: "UGBhyper", file: "https://ubghyper.github.io/index.html" },
        { title: "Quenq", file: "https://quenq.com", external: true },
        { title: "Jadson's Site", file: "https://sites.google.com/stu.sandi.net/vip/home?pli=1&authuser=5", external: true },
        { title: "Credits", file: "games/Credits.html" }
      ]
    },
    {
      id:'creative', title:'CREATIVE', tagline:'MAKE SOMETHING',
      accent:0xffe600, x:-5.3, z:0.2, rotY:Math.PI/2, where:'LEFT WALL',
      games:[
        { title: "MS Paint", file: "games/Paint.html" },
        { title: "Piano", file: "games/Piano.html" },
        { title: "Synth", file: "games/synth-keyboard.html" },
        { title: "Music Player", file: "games/MusicPlayer.html" },
        { title: "Windows 95", file: "games/Win95.html" },
        { title: "Window Rain", file: "games/windowrain.html" },
        { title: "LED Matrix", file: "games/LEDmatrix.html" },
        { title: "Live Transit Map", file: "games/transitmap.html" },
        { title: "Cyber Terminal", file: "games/cyberterminal.html" },
        { title: "Terminal", file: "games/Terminal.html" }
      ]
    },
    {
      id:'horror', title:'HORROR', tagline:'LIGHTS OUT',
      accent:0xff1744, x:-5.3, z:-2.4, rotY:Math.PI/2, where:'LEFT WALL',
      games:[
        { title: "Buckshot Roulette", file: "https://ubghyper.github.io/GameList.github.io/Buckshot-Roulete/" },
        { title: "MiSide", file: "https://ubghyper.github.io/GameList.github.io/Unity-Web-Player-MiSide/" },
        { title: "Pinehollow Funland", file: "games/pinehollow-funland-standalone.html" },
        { title: "R.E.P.O.", file: "https://ubghyper.github.io/GameList.github.io/Repo/" },
        { title: "Five Nights at Epst", file: "https://ubghyper.github.io/GameList.github.io/FNAE/" }
      ]
    },
  ];
