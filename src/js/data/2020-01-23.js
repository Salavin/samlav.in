dataSetVersion = "2020-01-23"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by Game",
        key: "game",
        tooltip: "Check this if you want to filter out characters from certain games.",
        checked: true,
        sub: [
            { name: "Tales of Phantasia", key: "ToP" },
            { name: "Tales of Narikiri Dungeon", key: "ToND" },
            { name: "Tales of Destiny", key: "ToD" },
            { name: "Tales of Eternia", key: "ToE" },
            { name: "Tales of Destiny 2", key: "ToD2" },
            { name: "Tales of Symphonia", key: "ToS" },
            { name: "Tales of Rebirth", key: "ToR" },
            { name: "Tales of Legendia", key: "ToL" },
            { name: "Tales of the Abyss", key: "TotA" },
            { name: "Tales of the Tempest", key: "TotT" },
            { name: "Tales of the World", key: "ToW" },
            { name: "Tales of Innocence R", key: "ToIR" },
            { name: "Tales of Symphonia: Dawn of the New World", key: "ToS:DotNW" },
            { name: "Tales of Vesperia", key: "ToV" },
            { name: "Tales of Hearts R", key: "ToHR" },
            { name: "Tales of Graces f", key: "ToGf" },
            { name: "Tales of Xillia", key: "ToX" },
            { name: "Tales of Xillia 2", key: "ToX2" },
            { name: "Tales of Link", key: "ToLink" },
            { name: "Tales of Zestiria", key: "ToZ" },
            { name: "Tales of Berseria", key: "ToB" },
            { name: "Tales of the Rays", key: "ToRays" },
            { name: "Tales of Crestoria", key: "ToC" }
        ]
    },
    {
        name: "Filter main characters",
        key: "mc",
        tooltip: "Check this if you want to filter out main characters.",
        checked: false
    },
    {
        name: "Filter playable characters",
        key: "p",
        tooltip: "Check this if you want to filter out playable characters.",
        checked: false
    },
    {
        name: "Filter antagonists",
        key: "a",
        tooltip: "Check this if you want to filter out antagonists.",
        checked: false
    },
    {
        name: "Filter males",
        key: "m",
        tooltip: "Check this if you want to filter out male characters.",
        checked: false
    },
    {
        name: "Filter females",
        key: "f",
        tooltip: "Check this if you want to filter out female characters.",
        checked: false
    }
];

    dataSet[dataSetVersion].characterData = [
    {
        name: "Cress Albane",
        img: "2VYXr4i.png",
        opts: {
            game: ["ToP"],
            mc: true,
            p: true,
            a: false,
            male: true,
            female: false
        }
    },
    {
        name: "Mint Adenade",
        img: "cNumvFm.png",
        opts: {
            game: ["ToP"],
            mc: false,
            p: true,
            a: false,
            male: false,
            female: true
        }
    },
    {
        name: "Chester Burklight",
        img: "GkjkWjw.png",
        opts: {
            game: ["ToP"],
            mc: false,
            p: true,
            a: false,
            male: true,
            female: false
        }
    },
    {
        name: "Claus F. Lester",
        img: "IUrK5Ro.png",
        opts: {
            game: ["ToP"],
            mc: false,
            p: true,
            a: false,
            male: true,
            female: false
        }
    },
    {
        name: "Arche Klein",
        img: "B6NUsHb.png",
        opts: {
            game: ["ToP"],
            mc: false,
            p: true,
            a: false,
            male: false,
            female: true
        }
    },
    {
        name: "Suzu Fujibayashi",
        img: "pnWiAEc.png",
        opts: {
            game: ["ToP"],
            mc: false,
            p: true,
            a: false,
            male: false,
            female: true
        }
    },
    {
        name: "Dhaos",
        img: "Rlp44ms.png",
        opts: {
            game: ["ToP"],
            mc: false,
            p: false,
            a: true,
            male: true,
            female: false
        }
    },
    {
        name: "Rondoline E. Effenberg",
        img: "gJKKeA5.png",
        opts: {
            game: ["ToP", "ToND"],
            mc: false,
            p: true,
            a: false,
            male: false,
            female: true
        }
    },

]