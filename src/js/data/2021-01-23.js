dataSetVersion = "2021-01-23"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by Game",
        key: "game",
        tooltip: "Check this if you want to filter out characters from certain games.",
        checked: true,
        sub: [
            {name: "Tales of Phantasia", key: "ToP"},
            {name: "Tales of Narikiri Dungeon", key: "ToND"},
            {name: "Tales of Destiny", key: "ToD"},
            {name: "Tales of Eternia", key: "ToE"},
            {name: "Tales of Destiny 2", key: "ToD2"},
            {name: "Tales of Symphonia", key: "ToS"},
            {name: "Tales of Rebirth", key: "ToR"},
            {name: "Tales of Legendia", key: "ToL"},
            {name: "Tales of the Abyss", key: "TotA"},
            {name: "Tales of the Tempest", key: "TotT"},
            {name: "Tales of the World", key: "ToW"},
            {name: "Tales of Innocence R", key: "ToIR"},
            {name: "Tales of Symphonia: Dawn of the New World", key: "ToS:DotNW"},
            {name: "Tales of Vesperia", key: "ToV"},
            {name: "Tales of Hearts R", key: "ToHR"},
            {name: "Tales of Graces f", key: "ToGf"},
            {name: "Tales of Xillia", key: "ToX"},
            {name: "Tales of Xillia 2", key: "ToX2"},
            {name: "Tales of Link", key: "ToLink"},
            {name: "Tales of Zestiria", key: "ToZ"},
            {name: "Tales of Berseria", key: "ToB"},
            {name: "Tales of the Rays", key: "ToRays"},
            {name: "Tales of Crestoria", key: "ToC"},
            {name: "Tales of Arise", key: "ToA"},
            {name: "Tales of Luminaria", key: "ToLumi"}
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
    },
    {
        name: "Filter summon spirits",
        key: "ss",
        tooltip: "Check this if you want to filter out summon spirits.",
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
        }
    },
    {
        name: "Keele Zeibel",
        img: "5kdZpND.png",
        opts: {
            game: ["ToE"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
        }
    },
    {
        name: "Colette Brunel",
        img: "KUZtbWf.png",
        opts: {
            game: ["ToS", "ToS:DotNW"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true,
            ss: false
        }
    },
    {
        name: "Genis Sage",
        img: "zmS9ovH.png",
        opts: {
            game: ["ToS", "ToS:DotNW"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false,
            ss: false
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
            female: false,
            ss: false
        }
    },
    {
        name: "Lloyd Irving",
        img: "zd4LDwC.png",
        opts: {
            game: ["ToS", "ToS:DotNW"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
        }
    },
    {
        name: "Presea Combatir",
        img: "MgunR32.png",
        opts: {
            game: ["ToS", "ToS:DotNW"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true,
            ss: false
        }
    },
    {
        name: "Raine Sage",
        img: "Kte29jG.png",
        opts: {
            game: ["ToS", "ToS:DotNW"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true,
            ss: false
        }
    },
    {
        name: "Regal Bryant",
        img: "e9hy3y3.png",
        opts: {
            game: ["ToS", "ToS:DotNW"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false,
            ss: false
        }
    },
    {
        name: "Sheena Fujibayashi",
        img: "0CDczyk.png",
        opts: {
            game: ["ToS", "ToS:DotNW"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true,
            ss: false
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
            female: false,
            ss: false
        }
    },
    {
        name: "Zelos Wilder",
        img: "B8ozqYO.png",
        opts: {
            game: ["ToS", "ToS:DotNW"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
        }
    },
    {
        name: "Milhaust Selkirk",
        img: "T1m9Wvl.png",
        opts: {
            game: ["ToR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
        }
    },
    {
        name: "Waltu",
        img: "T63Qz8f.png",
        opts: {
            game: ["ToR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false,
            ss: false
        }
    },
    {
        name: "Zapie",
        img: "0srzaFL.png",
        opts: {
            game: ["ToR"],
            mc: false,
            p: false,
            a: false,
            m: true,
            male: true,
            female: false,
            ss: false
        }
    },
    {
        name: "Zilva Madigan",
        img: "jJKEpno.png",
        opts: {
            game: ["ToR"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
        }
    },
    {
        name: "Jade Curtiss",
        img: "x4tlKMJ.png",
        opts: {
            game: ["TotA"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
        }
    },
    {
        name: "Floura Spodumene",
        img: "VplHBNX.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
        }
    },
    {
        name: "Lithia Spodumene",
        img: "JkrzE73.png",
        opts: {
            game: ["ToHR"],
            mc: false,
            p: false,
            a: false,
            m: false,
            male: false,
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
        }
    },
    {
        name: "Alvin",
        img: "4MNMAkB.png",
        opts: {
            game: ["ToX", "ToX2"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false,
            ss: false
        }
    },
    {
        name: "Elize Lutus",
        img: "zAROxsC.png",
        opts: {
            game: ["ToX", "ToX2"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true,
            ss: false
        }
    },
    {
        name: "Jude Mathis",
        img: "9XNiABA.png",
        opts: {
            game: ["ToX", "ToX2"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false,
            ss: false
        }
    },
    {
        name: "Leia Rolando",
        img: "gXhAL5O.png",
        opts: {
            game: ["ToX", "ToX2"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true,
            ss: false
        }
    },
    {
        name: "Milla Maxwell",
        img: "sRG9IEn.png",
        opts: {
            game: ["ToX", "ToX2"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true,
            ss: false
        }
    },
    {
        name: "Rowen J. Ilbert",
        img: "fFqQsvH.png",
        opts: {
            game: ["ToX", "ToX2"],
            mc: true,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false,
            ss: false
        }
    },
    {
        name: "Ivar",
        img: "GIni0oy.png",
        opts: {
            game: ["ToX", "ToX2"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false,
            ss: false
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
            female: false,
            ss: false
        }
    },
    {
        name: "Muzét",
        img: "DzMVZEq.png",
        opts: {
            game: ["ToX", "ToX2"],
            mc: false,
            p: true,
            a: true,
            m: false,
            male: false,
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
        }
    },
    {
        name: "Gaius",
        img: "ZnP7PmC.png",
        opts: {
            game: ["ToX"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
        }
    },

    {
        name: "Eleanor Hume",
        img: "5So2ARN.png",
        opts: {
            game: ["ToB"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
        }
    },
    {
        name: "Symonne",
        img: "xpKtKVk.png",
        opts: {
            game: ["ToZ"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: false,
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
        }
    },

    {
        name: "Law",
        img: "jxHwEsX.png",
        opts: {
            game: ["ToA"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: true,
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
        }
    },

    {
        name: "Vholran Igniseri",
        img: "Gxjp00f.png",
        opts: {
            game: ["ToA"],
            mc: false,
            p: false,
            a: true,
            m: false,
            male: true,
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
        }
    },
    {
        name: "Celia Arvier",
        img: "SL1yMWu.png",
        opts: {
            game: ["ToLumi"],
            mc: false,
            p: true,
            a: false,
            m: false,
            male: false,
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
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
            female: true,
            ss: false
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
            female: false,
            ss: false
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
            female: false,
            ss: false
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
            female: true,
            ss: false
        }
    },
]