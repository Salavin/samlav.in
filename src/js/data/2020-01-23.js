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
            { name: "Tales of Crestoria", key: "ToC" },
            { name: "Tales of Arise", key: "ToA" },
            { name: "Tales of Luminaria", key: "ToLumi" }
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
        name: "Filter mascots",
        key: "m",
        tooltip: "Check this if you want to filter out mascots.",
        checked: false
    },
    {
        name: "Filter males",
        key: "male",
        tooltip: "Check this if you want to filter out male characters.",
        checked: false
    },
    {
        name: "Filter females",
        key: "female",
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
        m: false,
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
        m: false,
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
        m: false,
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
        m: false,
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
        m: false,
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
        m: false,
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
        m: false,
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
        m: false,
        male: false,
        female: true
    }
},
    {
        name: "Dio",
        img: "WE3aKgU.png",
        opts: {
            game: ["ToND"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Mell",
        img: "NE5moqy.png",
        opts: {
            game: ["ToND"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Couleur",
        img: "rSldasS.png",
        opts: {
            game: ["ToND"],
            mc: false,
            p: true,
            a: false,
            m: true,
            male: false,
            female: true
        }
    },
    {
        name: "Dios Dandi",
        img: "GH9BLW0.png",
        opts: {
            game: ["ToND"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Meltia Bandi",
        img: "KW71yx5.png",
        opts: {
            game: ["ToND"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Norn",
        img: "MRcn9Rh.png",
        opts: {
            game: ["ToND"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Ethos",
        img: "UUFphTO.png",
        opts: {
            game: ["ToND"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Bruiser Khang",
        img: "2gKf9k9.png",
        opts: {
            game: ["ToD"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Chelsea Torn",
        img: "RPyAqaA.png",
        opts: {
            game: ["ToD"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Garr Kelvin",
        img: "YBR6LcE.png",
        opts: {
            game: ["ToD"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Karyl Sheeden",
        img: "1Y9QVpz.png",
        opts: {
            game: ["ToD"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Leon Magnus",
        img: "Ya5Wi6D.png",
        opts: {
            game: ["ToD"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Lilith Aileron",
        img: "1OGpkjS.png",
        opts: {
            game: ["ToD"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Mary Argent",
        img: "jCJ81IO.png",
        opts: {
            game: ["ToD"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Phillia Felice",
        img: "EsxQT3T.png",
        opts: {
            game: ["ToD"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Rutee Katrea",
        img: "6bqQFyP.png",
        opts: {
            game: ["ToD"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Stahn Aileron",
        img: "BGx849s.png",
        opts: {
            game: ["ToD"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Dalis Vincent",
        img: "Pa7cvFZ.png",
        opts: {
            game: ["ToD"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Hugo Gilchrist",
        img: "88TQ4bP.png",
        opts: {
            game: ["ToD"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Iliene Rembrandt",
        img: "RZ3Dl6I.png",
        opts: {
            game: ["ToD"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Kronos",
        img: "y3K3Fvr.png",
        opts: {
            game: ["ToD"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Atwight Eks",
        img: "RRPZZYh.png",
        opts: {
            game: ["ToD2"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Barbatos Goetia",
        img: "jF5Rbw9.png",
        opts: {
            game: ["ToD2"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Pierre de Chaltier",
        img: "A08I4ZX.png",
        opts: {
            game: ["ToD2"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Dymlos Timber",
        img: "2MlVQvc.png",
        opts: {
            game: ["ToD2"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Elrane",
        img: "owjc54Q.png",
        opts: {
            game: ["ToD2"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Harold Berselius",
        img: "SHSvXvs.png",
        opts: {
            game: ["ToD2"],
            mc: false,
            p: true,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Judas",
        img: "zDBjXMF.png",
        opts: {
            game: ["ToD2"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Kyle Dumanis",
        img: "xKMZxGQ.png",
        opts: {
            game: ["ToD2"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Loni Dunamis",
        img: "YH19mPI.png",
        opts: {
            game: ["ToD2"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Nanaly Fletcher",
        img: "A833CgF.png",
        opts: {
            game: ["ToD2"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Reala",
        img: "8qhyqJJ.png",
        opts: {
            game: ["ToD2"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Rimul Aileron",
        img: "UpNjXwu.png",
        opts: {
            game: ["ToD2"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Igtenos Minarde",
        img: "a0nIgWa.png",
        opts: {
            game: ["ToD2"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Laville Clemente",
        img: "A0MtJPV.png",
        opts: {
            game: ["ToD2"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Celsius",
        img: "ElZaqBF.png",
        opts: {
            game: ["ToE"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Chat",
        img: "ylJ5Ema.png",
        opts: {
            game: ["ToE"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Farah Oersted",
        img: "l8CPoSj.png",
        opts: {
            game: ["ToE"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Keeke Zeibel",
        img: "5kdZpND.png",
        opts: {
            game: ["ToE"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Max",
        img: "hBLfkBk.png",
        opts: {
            game: ["ToE"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Meredy",
        img: "6854Osh.png",
        opts: {
            game: ["ToE"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Rassius Luine",
        img: "KZoo9VV.png",
        opts: {
            game: ["ToE"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Reid Hershel",
        img: "I6XB6lH.png",
        opts: {
            game: ["ToE"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Shizel",
        img: "mNqkneQ.png",
        opts: {
            game: ["ToE"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Quickie",
        img: "tQOQ4Vp.png",
        opts: {
            game: ["ToE"],
            mc: false,
            p: true,
            a: false,
            m: true,
            male: true,
            female: false
        }
    },
    {
        name: "Colette Brunel",
        img: "KUZtbWf.png",
        opts: {
            game: ["ToS, ToS:DotNW"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Genis Sage",
        img: "zmS9ovH.png",
        opts: {
            game: ["ToS, ToS:DotNW"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Kratos Aurion",
        img: "6L7QzV3.png",
        opts: {
            game: ["ToS"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Lloyd Irving",
        img: "zd4LDwC.png",
        opts: {
            game: ["ToS, ToS:DotNW"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Martel Yggdrasil",
        img: "Pip78pY.png",
        opts: {
            game: ["ToS"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Mithos Yggdrasil",
        img: "Brrf8r0.png",
        opts: {
            game: ["ToS"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Presea Combatir",
        img: "MgunR32.png",
        opts: {
            game: ["ToS, ToS:DotNW"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Raine Sage",
        img: "Kte29jG.png",
        opts: {
            game: ["ToS, ToS:DotNW"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Regal Bryant",
        img: "e9hy3y3.png",
        opts: {
            game: ["ToS, ToS:DotNW"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Sheena Fujibayashi",
        img: "0CDczyk.png",
        opts: {
            game: ["ToS, ToS:DotNW"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Yuan Ka-Fei",
        img: "Q5db1D8.png",
        opts: {
            game: ["ToS"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Zelos Wilder",
        img: "B8ozqYO.png",
        opts: {
            game: ["ToS, ToS:DotNW"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Noishe",
        img: "TwAzABr.png",
        opts: {
            game: ["ToS"],
            mc: false,
            p: false,
            a: false,
            m: true,
            male: true,
            female: false
        }
    },
    {
        name: "Alice",
        img: "XuxwXrl.png",
        opts: {
            game: ["ToS:DotNW"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Decus",
        img: "DFyt8TD.png",
        opts: {
            game: ["ToS:DotNW"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Emil Castagnier",
        img: "5wsgCgq.png",
        opts: {
            game: ["ToS:DotNW"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Marta Lualdi",
        img: "IvysA0D.png",
        opts: {
            game: ["ToS:DotNW"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Richter Abend",
        img: "IFRhEwD.png",
        opts: {
            game: ["ToS:DotNW"],
            mc: false,
            p: true,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Aqua",
        img: "c7ERu88.png",
        opts: {
            game: ["ToS:DotNW"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Hawk",
        img: "lSHumXP.png",
        opts: {
            game: ["ToS:DotNW"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Tenebrae",
        img: "VVtBxiK.png",
        opts: {
            game: ["ToS:DotNW"],
            mc: false,
            p: false,
            a: false,
            m: true,
            male: true,
            female: false
        }
    },
    {
        name: "Annie Barrs",
        img: "mPfOWaQ.png",
        opts: {
            game: ["ToR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Eugene Gallardo",
        img: "IDav1VH.png",
        opts: {
            game: ["ToR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Hilda Rhambling",
        img: "cOUhqON.png",
        opts: {
            game: ["ToR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Mao",
        img: "ROJaLSq.png",
        opts: {
            game: ["ToR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Saleh",
        img: "K9sHhLt.png",
        opts: {
            game: ["ToR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Tytree Crowe",
        img: "tqYzZ6b.png",
        opts: {
            game: ["ToR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Veigue Lungberg",
        img: "zhb1HOT.png",
        opts: {
            game: ["ToR"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Agarte Lindblum",
        img: "khrE94b.png",
        opts: {
            game: ["ToR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "MilHaust Selkirk",
        img: "T1m9Wvl.png",
        opts: {
            game: ["ToR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Militsa",
        img: "XbqYEmk.png",
        opts: {
            game: ["ToR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Tohma",
        img: "3XlmJez.png",
        opts: {
            game: ["ToR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Walto",
        img: "T63Qz8f.png",
        opts: {
            game: ["ToR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Zapie",
        img: "jJKEpno.png",
        opts: {
            game: ["ToR"],
            mc: false,
            p: false,
            a: false,
            m: true,
            male: true,
            female: false
        }
    },
    {
        name: "Chloe Valens",
        img: "bI6bpyK.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Grune",
        img: "SHcIv3a.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Jay",
        img: "uSZ6eBx.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Moses Sandor",
        img: "LWCvSvq.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Norma Beatty",
        img: "k3oDCQQ.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Senel Coolidge",
        img: "LbaWRi0.png",
        opts: {
            game: ["ToL"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Shirley Fennes",
        img: "O6TNUcY.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Walter Delques",
        img: "zkhK7J1.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Will Raynard",
        img: "W5mCGli.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Cashel",
        img: "m4Uh3p4.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Ed Curtis",
        img: "kmNMdxQ.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Fenimore Xelhes",
        img: "tQeN3uN.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Giet",
        img: "mTzsK3x.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: false,
            a: false,
            m: true,
            male: true,
            female: false
        }
    },
    {
        name: "Isabella Robbins",
        img: "LXOe7iy.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Melanie",
        img: "Y3HY9Rb.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Mimi Baker",
        img: "gpc8l1c.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Quppo, Pippo, and Poppo",
        img: "ejryaPx.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: false,
            a: false,
            m: true,
            male: true,
            female: false
        }
    },
    {
        name: "Schwartz",
        img: "EYRqg2Q.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Stella Telmes",
        img: "PKae099.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Stingle",
        img: "eWkrWI8.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Vaclav Bolud",
        img: "IdfJkfA.png",
        opts: {
            game: ["ToL"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Anise Tatlin",
        img: "HfVa7wu.png",
        opts: {
            game: ["TotA"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Arietta",
        img: "aITIiLa.png",
        opts: {
            game: ["TotA"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Asch",
        img: "u5Patt1.png",
        opts: {
            game: ["TotA"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Dist",
        img: "nDtRi8v.png",
        opts: {
            game: ["TotA"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Guy Cecil",
        img: "O9HqgtK.png",
        opts: {
            game: ["TotA"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Ion",
        img: "303Mh6m.png",
        opts: {
            game: ["TotA"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Jade Curtiss",
        img: "303Mh6m.png",
        opts: {
            game: ["TotA"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Legretta",
        img: "PkFFATM.png",
        opts: {
            game: ["TotA"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Luke Fon Fabre",
        img: "AuaxiZR.png",
        opts: {
            game: ["TotA"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Natalia L.K. Lanvaldear",
        img: "aa3JOAn.png",
        opts: {
            game: ["TotA"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Peony Upala Malkuth IX",
        img: "INfLMH7.png",
        opts: {
            game: ["TotA"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Sync",
        img: "N5chjY6.png",
        opts: {
            game: ["TotA"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Tear Grants",
        img: "wMGjA7I.png",
        opts: {
            game: ["TotA"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Van Grants",
        img: "1HBW8D2.png",
        opts: {
            game: ["TotA"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Largo",
        img: "LUmN9s8.png",
        opts: {
            game: ["TotA"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Mieu",
        img: "QWJVFSn.png",
        opts: {
            game: ["TotA"],
            mc: false,
            p: false,
            a: false,
            m: true,
            male: true,
            female: false
        }
    },
    {
        name: "Rubia Natwick",
        img: "MUNN161.png",
        opts: {
            game: ["TotT"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Lukius Bridges",
        img: "YpUYSW2.png",
        opts: {
            game: ["TotT"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Tilkis Barone",
        img: "9aa5amn.png",
        opts: {
            game: ["TotT"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Albert Mueller",
        img: "j9MuXKH.png",
        opts: {
            game: ["TotT"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Areulla VIII",
        img: "5OREUjV.png",
        opts: {
            game: ["TotT"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Rommy",
        img: "73c8BCI.png",
        opts: {
            game: ["TotT"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Vincent Bridges",
        img: "OE4Vzpq.png",
        opts: {
            game: ["TotT"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Arria Ekberg",
        img: "1ydRCpM.png",
        opts: {
            game: ["TotT"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Caius Qualls",
        img: "SUc2Rln.png",
        opts: {
            game: ["TotT"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Forest Ledoyen",
        img: "chmqVIX.png",
        opts: {
            game: ["TotT"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Ange Serena",
        img: "exQSDZi.png",
        opts: {
            game: ["ToIR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Hermana Larmo",
        img: "Q2cnGPZ.png",
        opts: {
            game: ["ToIR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Hermana Larmo",
        img: "Q2cnGPZ.png",
        opts: {
            game: ["ToIR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Illia Animi",
        img: "nHSLV8Q.png",
        opts: {
            game: ["ToIR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Kongwai Tao",
        img: "PfmYF49.png",
        opts: {
            game: ["ToIR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "QQ Selezneva",
        img: "fLoKQxF.png",
        opts: {
            game: ["ToIR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Ricardo Soldato",
        img: "9BohQpS.png",
        opts: {
            game: ["ToIR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Ruca Milda",
        img: "sl9ASb3.png",
        opts: {
            game: ["ToIR"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Spada Belforma",
        img: "VloPXSv.png",
        opts: {
            game: ["ToIR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Albert Grandeioza",
        img: "LcVBULd.png",
        opts: {
            game: ["ToIR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Coda",
        img: "ue1OpJW.png",
        opts: {
            game: ["ToIR"],
            mc: false,
            p: false,
            a: false,
            m: true,
            male: true,
            female: false
        }
    },
    {
        name: "Gardle",
        img: "3CSmlZT.png",
        opts: {
            game: ["ToIR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Hasta Ekstermi",
        img: "1XtQOMo.png",
        opts: {
            game: ["ToIR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Mathias",
        img: "oebsS6D.png",
        opts: {
            game: ["ToIR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Sian Tenebro",
        img: "WyURKYv.png",
        opts: {
            game: ["ToIR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Thitose Cxarma",
        img: "zb4PxZX.png",
        opts: {
            game: ["ToIR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Alexei Dinoia",
        img: "byONqI9.png",
        opts: {
            game: ["ToV"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Gauche",
        img: "OScoyDM.png",
        opts: {
            game: ["ToV"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Droite",
        img: "OEExcUa.png",
        opts: {
            game: ["ToV"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Duke Pantarei",
        img: "6tWDKHR.png",
        opts: {
            game: ["ToV"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Estellise Sidos Heurassein",
        img: "IbVWcRc.png",
        opts: {
            game: ["ToV"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Flynn Scifo",
        img: "etDf6O8.png",
        opts: {
            game: ["ToV"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Judith",
        img: "mBYHaet.png",
        opts: {
            game: ["ToV"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Karol Capel",
        img: "vveXQda.png",
        opts: {
            game: ["ToV"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Patty Fleur",
        img: "OORus3X.png",
        opts: {
            game: ["ToV"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Raven",
        img: "XF9FJqn.png",
        opts: {
            game: ["ToV"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Repede",
        img: "X69vZaG.png",
        opts: {
            game: ["ToV"],
            mc: false,
            p: true,
            a: false,
            m: true,
            male: true,
            female: false
        }
    },
    {
        name: "Rita Mordio",
        img: "N8Cjr7y.png",
        opts: {
            game: ["ToV"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Yeager",
        img: "NgIXmHr.png",
        opts: {
            game: ["ToV"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Yuri Lowell",
        img: "sBKs65J.png",
        opts: {
            game: ["ToV"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Nan",
        img: "BUsBZNP.png",
        opts: {
            game: ["ToV"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Tison",
        img: "HJSM7L2.png",
        opts: {
            game: ["ToV"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Beryl Benito",
        img: "gHNaufj.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Chalcedony Akerman",
        img: "SZQZI6C.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Creed Graphite",
        img: "rFE5RO4.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Gall Gruner",
        img: "TP7i0S4.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Hisui Hearts",
        img: "GHaqHlS.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Ines Lorenzen",
        img: "3cWjog6.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Kohaku Hearts",
        img: "QwRNCD2.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Kor Meteor",
        img: "1czeAq9.png",
        opts: {
            game: ["ToHR"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Lithia Cattleya",
        img: "VplHBNX.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Peridot Harmotome",
        img: "3n1gg82.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Chlorseraph",
        img: "OW6MBzW.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Clinoseraph",
        img: "6Vqevdt.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Corundum",
        img: "SjGd7U6.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Lithia Spodumene",
        img: "JkrzE73.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Incarose",
        img: "ZRQKVwk.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Pyrox Ferro",
        img: "mP2ciCy.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Azide Silver",
        img: "9bZr2KF.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Windum",
        img: "mc0ts7w.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: false,
            a: false,
            m: true,
            male: true,
            female: false
        }
    },
    {
        name: "Asbel Lhant",
        img: "RfaHWI8.png",
        opts: {
            game: ["ToGf"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Cheria Barnes",
        img: "C3rjboN.png",
        opts: {
            game: ["ToGf"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Hubert Oswell",
        img: "Hece0bJ.png",
        opts: {
            game: ["ToGf"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Little Queen",
        img: "oxGgnE2.png",
        opts: {
            game: ["ToGf"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Malik Caesar",
        img: "B4aMcvK.png",
        opts: {
            game: ["ToGf"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Pascal",
        img: "0hr2doL.png",
        opts: {
            game: ["ToGf"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Richard",
        img: "EMywQvi.png",
        opts: {
            game: ["ToGf"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Sophie",
        img: "LOHtIKS.png",
        opts: {
            game: ["ToGf"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Emeraude",
        img: "yqcLW1j.png",
        opts: {
            game: ["ToGf"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Lambda",
        img: "Y87exlq.png",
        opts: {
            game: ["ToGf"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Agria",
        img: "PzeD209.png",
        opts: {
            game: ["ToX"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Alvin",
        img: "4MNMAkB.png",
        opts: {
            game: ["ToX, ToX2"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Elize Lutus",
        img: "zAROxsC.png",
        opts: {
            game: ["ToX, ToX2"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Jude Mathis",
        img: "9XNiABA.png",
        opts: {
            game: ["ToX, ToX2"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Leia Rolando",
        img: "gXhAL5O.png",
        opts: {
            game: ["ToX, ToX2"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Milla Maxwell",
        img: "sRG9IEn.png",
        opts: {
            game: ["ToX, ToX2"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Rowen J. Ilbert",
        img: "fFqQsvH.png",
        opts: {
            game: ["ToX, ToX2"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Ivar",
        img: "GIni0oy.png",
        opts: {
            game: ["ToX, ToX2"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Jiao",
        img: "VblLRKx.png",
        opts: {
            game: ["ToX"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Muzét",
        img: "DzMVZEq.png",
        opts: {
            game: ["ToX, ToX2"],
            mc: false,
            p: true,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Nachtigal I. Fenn",
        img: "WVYXcBk.png",
        opts: {
            game: ["ToX"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Presa",
        img: "un2z2V8.png",
        opts: {
            game: ["ToX"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Wingul",
        img: "PhJW9cv.png",
        opts: {
            game: ["ToX"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Giaus",
        img: "ZnP7PmC.png",
        opts: {
            game: ["ToX"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Cline K. Sharil",
        img: "cpzGDM3.png",
        opts: {
            game: ["ToX"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Driselle K. Sharil",
        img: "ZF2gVgN.png",
        opts: {
            game: ["ToX"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Sara",
        img: "SzR9LFO.png",
        opts: {
            game: ["ToLink"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Allen/Savior",
        img: "5TsLoMm.png",
        opts: {
            game: ["ToLink"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Zephyr",
        img: "YF9tVFt.png",
        opts: {
            game: ["ToLink"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Kana",
        img: "lNqZZhc.png",
        opts: {
            game: ["ToLink"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Lippy",
        img: "RWg8Z35.png",
        opts: {
            game: ["ToLink"],
            mc: false,
            p: true,
            a: false,
            m: true,
            male: true,
            female: false
        }
    },

    {
        name: "Caeser",
        img: "KKtKhrN.png",
        opts: {
            game: ["ToLink"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Leonne",
        img: "4mvRpQa.png",
        opts: {
            game: ["ToLink"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Velvet Crowe",
        img: "o3o067P.png",
        opts: {
            game: ["ToB"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Laphicet",
        img: "GeMzjZX.png",
        opts: {
            game: ["ToB"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Rokurou Rangetsu",
        img: "nsAjJe6.png",
        opts: {
            game: ["ToB"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Eizen",
        img: "UccoIIZ.png",
        opts: {
            game: ["ToB"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Magilou",
        img: "kVlYR4j.png",
        opts: {
            game: ["ToB"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Eleanor Hume",
        img: "PhJW9cv.png",
        opts: {
            game: ["ToB"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Artorius Collbrande",
        img: "8eSboN1.png",
        opts: {
            game: ["ToB"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Shigure Rangetsu",
        img: "POeJ3XA.png",
        opts: {
            game: ["ToB"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Oscar Dragonia",
        img: "GJ1u5Nm.png",
        opts: {
            game: ["ToB"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Bienfu",
        img: "FYsaX7R.png",
        opts: {
            game: ["ToB"],
            mc: false,
            p: false,
            a: false,
            m: true,
            male: true,
            female: false
        }
    },

    {
        name: "Laphicet Crowe",
        img: "S1R6FGM.png",
        opts: {
            game: ["ToB"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Innominat",
        img: "8OpuDPk.png",
        opts: {
            game: ["ToB"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Melchior Mayvin",
        img: "brcEYxt.png",
        opts: {
            game: ["ToB"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Seres",
        img: "hyHedxv.png",
        opts: {
            game: ["ToB"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Teresa Linares",
        img: "5G2ocqK.png",
        opts: {
            game: ["ToB"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Alisha Diphda",
        img: "ls4QtyV.png",
        opts: {
            game: ["ToZ"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Dezel",
        img: "OPEWsgm.png",
        opts: {
            game: ["ToZ"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Edna",
        img: "nX7Y3lK.png",
        opts: {
            game: ["ToZ"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Heldalf",
        img: "DOgVftm.png",
        opts: {
            game: ["ToZ"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Lailah",
        img: "JR9koi2.png",
        opts: {
            game: ["ToZ"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Lunarre",
        img: "7qNGpKy.png",
        opts: {
            game: ["ToZ"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Mikleo",
        img: "jQCE7VH.png",
        opts: {
            game: ["ToZ"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Phoenix",
        img: "uLWQI45.png",
        opts: {
            game: ["ToZ"],
            mc: false,
            p: false,
            a: false,
            m: true,
            male: true,
            female: false
        }
    },
    {
        name: "Rose",
        img: "Chd9KF7.png",
        opts: {
            game: ["ToZ"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Sorey",
        img: "D7iSDwO.png",
        opts: {
            game: ["ToZ"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Synonne",
        img: "xpKtKVk.png",
        opts: {
            game: ["ToZ"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Zaveid",
        img: "JPJTxP3.png",
        opts: {
            game: ["ToZ"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
{
        name: "Ix Nieves",
        img: "VJd4zl3.png",
        opts: {
            game: ["ToRays"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Mileena Weiss",
        img: "f6PlzJo.png",
        opts: {
            game: ["ToRays"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Marcus Grimm",
        img: "BEfZRYR.png",
        opts: {
            game: ["ToRays"],
            mc: false,
            p: true,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Nazar",
        img: "UZFWEbx.png",
        opts: {
            game: ["ToRays"],
            mc: false,
            p: true,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Mercuria",
        img: "Z0DpL1q.png",
        opts: {
            game: ["ToRays"],
            mc: false,
            p: true,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Kocis",
        img: "5UXD0vy.png",
        opts: {
            game: ["ToRays"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Karia Nevan",
        img: "RUetAZE.png",
        opts: {
            game: ["ToRays"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Baldo",
        img: "05oLbfJ.png",
        opts: {
            game: ["ToRays"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Cecily",
        img: "39ExHUC.png",
        opts: {
            game: ["ToRays"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Gareth",
        img: "VmlhXJr.png",
        opts: {
            game: ["ToRays"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Junior",
        img: "d2MlhKx.png",
        opts: {
            game: ["ToRays"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Kocis (Fairy)",
        img: "C1uDc14.png",
        opts: {
            game: ["ToRays"],
            mc: false,
            p: false,
            a: false,
            m: true,
            male: true,
            female: false
        }
    },

    {
        name: "Karia (Fairy)",
        img: "xAPlQGe.png",
        opts: {
            game: ["ToRays"],
            mc: false,
            p: false,
            a: false,
            m: true,
            male: false,
            female: true
        }
    },

    {
        name: "Yolande",
        img: "C2TzTuV.png",
        opts: {
            game: ["ToRays"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Gefion",
        img: "7EeN5jQ.png",
        opts: {
            game: ["ToRays"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Demetrius",
        img: "Idqsg0c.png",
        opts: {
            game: ["ToRays"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Phillip",
        img: "i2pO9qV.png",
        opts: {
            game: ["ToRays"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Phantom",
        img: "JVd5De8.png",
        opts: {
            game: ["ToRays"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Aegis Alver",
        img: "M2Tgb85.png",
        opts: {
            game: ["ToC"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Assid",
        img: "hfHc42i.png",
        opts: {
            game: ["ToC"],
            mc: false,
            p: true,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Forte",
        img: "2oPujhs.png",
        opts: {
            game: ["ToC"],
            mc: false,
            p: true,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Kanata Hjuger",
        img: "tn6fO4q.png",
        opts: {
            game: ["ToC"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Makina",
        img: "gSUT1e2.png",
        opts: {
            game: ["ToC"],
            mc: false,
            p: true,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Meakyu",
        img: "DleQ6E1.png",
        opts: {
            game: ["ToC"],
            mc: false,
            p: false,
            a: false,
            m: true,
            male: true,
            female: false
        }
    },
    {
        name: "Misella",
        img: "VET4Xgb.png",
        opts: {
            game: ["ToC"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Orwin Granberg",
        img: "D7avoZo.png",
        opts: {
            game: ["ToC"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Vicious",
        img: "L6F9lL9.png",
        opts: {
            game: ["ToC"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Yuna Azetta",
        img: "bCPggqX.png",
        opts: {
            game: ["ToC"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Kasque",
        img: "U6KdsFU.png",
        opts: {
            game: ["ToC"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Alphen",
        img: "FaOJGdf.png",
        opts: {
            game: ["ToA"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Shionne Vymer Imeris Daymore",
        img: "8MS91Om.png",
        opts: {
            game: ["ToA"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Rinwell",
        img: "AGrXpYx.png",
        opts: {
            game: ["ToA"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Law",
        img: "PhJW9cv.png",
        opts: {
            game: ["ToA"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Kisara",
        img: "qSP8zmF.png",
        opts: {
            game: ["ToA"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Dohalim il Qaras",
        img: "iSE3aaB.png",
        opts: {
            game: ["ToA"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Hootle",
        img: "7SGSjzN.png",
        opts: {
            game: ["ToA"],
            mc: false,
            p: false,
            a: false,
            m: true,
            male: true,
            female: false
        }
    },

    {
        name: "Zephyr",
        img: "GaPkBtj.png",
        opts: {
            game: ["ToA"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Migal",
        img: "5OA0hVh.png",
        opts: {
            game: ["ToA"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Cholran Igniseri",
        img: "Gxjp00f.png",
        opts: {
            game: ["ToA"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Balseph",
        img: "xZQa1oI.png",
        opts: {
            game: ["ToA"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Ganabelt Valkyris",
        img: "y3Qu7HT.png",
        opts: {
            game: ["ToA"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false
        }
    },

    {
        name: "Almeidrea Kaineris",
        img: "2Z3cufw.png",
        opts: {
            game: ["ToA"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true
        }
    },

    {
        name: "Naori Imeris",
        img: "ISKxvXH.png",
        opts: {
            game: ["ToA"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Leo Fourcade",
        img: "wie6iR6.png",
        opts: {
            game: ["ToLumi"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Celia ARvier",
        img: "SL1yMWu.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Michelle Bouquet",
        img: "T7SPhDs.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Lisette Regnier",
        img: "ytZApPo.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Lucien Dufaure",
        img: "fCi7JRP.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Maxime Hasselmans",
        img: "CWE6zfu.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Vanessa Morax",
        img: "u9pqYqS.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Yelsy Tw'elteu Huainaz'jin",
        img: "YpBVHyk.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "August Wallenstein",
        img: "fVyEFIi.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Alexandra von Sonne",
        img: "FCPphyk.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Bastien Forge",
        img: "rxChO9X.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Laplace",
        img: "e6YOcrc.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Gaspard Herbet",
        img: "qNiio8V.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Hugo Simon",
        img: "0KbSKkY.png",
        opts: {
            game: ["ToLumi"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Amelie Laurence",
        img: "GYkOkVr.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Falk",
        img: "egmT9G9.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Edouard Rouquier",
        img: "sr3HqgQ.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Lydie Delacroix",
        img: "5iWBcWJ.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Ana-Maria Marschner",
        img: "Z0RtwTU.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true
        }
    },
    {
        name: "Charles",
        img: "GUowaf5.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Raoul",
        img: "ucsdSC8.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false
        }
    },
    {
        name: "Toto",
        img: "ASDIcxX.gif",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: false,
            a: false,
            m: true,
            male: false,
            female: true
        }
    },
]