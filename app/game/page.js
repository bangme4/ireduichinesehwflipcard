"use client";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

// Full Hanzi data
const hanziData = [
  {
    hanzi: "打",
    pinyin: "dǎ",
    parts: ["扌", "丁"],
    fakes: [
      ["扌", "工"],
      ["手", "丁"],
      ["扌", "大"],
    ],
  },
  {
    hanzi: "球",
    pinyin: "qiú",
    parts: ["王", "求"],
    fakes: [
      ["玉", "求"],
      ["王", "木"],
      ["土", "求"],
    ],
  },
  {
    hanzi: "食堂",
    pinyin: "shítáng",
    parts: ["食", "尚"],
    fakes: [
      ["饣", "尚"],
      ["食", "常"],
      ["良", "尚"],
    ],
  },
  {
    hanzi: "两",
    pinyin: "liǎng",
    parts: ["一", "入", "冂"],
    fakes: [
      ["二", "入", "冂"],
      ["一", "八", "冂"],
      ["一", "人", "冂"],
    ],
  },
  {
    hanzi: "聚会",
    pinyin: "jùhuì",
    parts: ["取", "又", "人"],
    fakes: [
      ["具", "人"],
      ["取", "大"],
      ["娶", "人"],
    ],
  },
  {
    hanzi: "祝",
    pinyin: "zhù",
    parts: ["礻", "兄"],
    fakes: [
      ["示", "兄"],
      ["礻", "兄弟"],
      ["衣", "兄"],
    ],
  },
  {
    hanzi: "快乐",
    pinyin: "kuàilè",
    parts: ["忄", "夸", "丿", "小"],
    fakes: [
      ["心", "夸", "小"],
      ["忄", "大", "小"],
      ["忄", "夸", "少"],
    ],
  },
  {
    hanzi: "碗",
    pinyin: "wǎn",
    parts: ["石", "宛"],
    fakes: [
      ["口", "宛"],
      ["王", "宛"],
      ["石", "完"],
    ],
  },
  {
    hanzi: "葡萄酒",
    pinyin: "pútáojiǔ",
    parts: ["艹", "甫", "艹", "兆", "氵", "酉"],
    fakes: [
      ["艹", "付", "艹", "兆", "氵", "酉"],
      ["艹", "甫", "艹", "召", "氵", "酉"],
      ["艹", "甫", "艹", "兆", "氵", "水"],
    ],
  },
  {
    hanzi: "吹",
    pinyin: "chuī",
    parts: ["口", "欠"],
    fakes: [
      ["口", "犬"],
      ["口", "夫"],
      ["口", "攵"],
    ],
  },
  {
    hanzi: "蜡烛",
    pinyin: "làzhú",
    parts: ["虫", "昔", "火", "勺"],
    fakes: [
      ["虫", "者", "火", "勺"],
      ["虫", "昔", "火", "允"],
      ["虫", "昔", "灬", "勺"],
    ],
  },
  {
    hanzi: "卡拉OK",
    pinyin: "kǎlā OK",
    parts: ["卡", "拉", "O", "K"],
    fakes: [
      ["卡", "啦", "O", "K"],
      ["卜", "拉", "O", "K"],
      ["卡", "垃", "O", "K"],
    ],
  },
  {
    hanzi: "但是",
    pinyin: "dànshì",
    parts: ["但", "日"],
    fakes: [
      ["但", "白"],
      ["仆", "日"],
      ["但", "曰"],
    ],
  },
  {
    hanzi: "晚",
    pinyin: "wǎn",
    parts: ["日", "免"],
    fakes: [
      ["日", "兔"],
      ["日", "免去"],
      ["日", "兑"],
    ],
  },
  {
    hanzi: "放心",
    pinyin: "fàngxīn",
    parts: ["方", "心"],
    fakes: [
      ["放", "心"],
      ["方", "必"],
      ["方", "忄"],
    ],
  },
  {
    hanzi: "美术馆",
    pinyin: "měishùguǎn",
    parts: ["羊", "大", "术", "饣", "官"],
    fakes: [
      ["羊", "大", "未", "饣", "官"],
      ["美", "未", "饣", "宀"],
      ["羊", "术", "饣", "宛"],
    ],
  },
  {
    hanzi: "展览",
    pinyin: "zhǎnlǎn",
    parts: ["尸", "廾", "见"],
    fakes: [
      ["尽", "廾", "见"],
      ["尸", "广", "见"],
      ["尸", "兰", "见"],
    ],
  },
  {
    hanzi: "没意见",
    pinyin: "méiyìjiàn",
    parts: ["氵", "殳", "意", "见"],
    fakes: [
      ["氵", "没", "意", "见"],
      ["氵", "段", "意", "见"],
      ["氵", "殳", "意", "见人"],
    ],
  },
  {
    hanzi: "意见",
    pinyin: "yìjiàn",
    parts: ["意", "见"],
    fakes: [
      ["贝", "面"],
      ["见", "页"],
      ["见", "自"],
    ],
  },
  {
    hanzi: "早饭",
    pinyin: "zǎofàn",
    parts: ["日", "十", "饣", "反"],
    fakes: [
      ["日", "十", "饣", "又"],
      ["日", "十", "食", "反"],
      ["日", "士", "饣", "反"],
    ],
  },
  {
    hanzi: "找",
    pinyin: "zhǎo",
    parts: ["扌", "戈"],
    fakes: [
      ["手", "戈"],
      ["扌", "弋"],
      ["扌", "乂"],
    ],
  },
  {
    hanzi: "门口",
    pinyin: "ménkǒu",
    parts: ["门", "口"],
    fakes: [
      ["门", "日"],
      ["门", "囗"],
      ["门", "白"],
    ],
  },
  {
    hanzi: "见面",
    pinyin: "jiànmiàn",
    parts: ["见", "面"],
    fakes: [
      ["贝", "面"],
      ["见", "页"],
      ["见", "自"],
    ],
  },
  {
    hanzi: "电脑",
    pinyin: "diànnǎo",
    parts: ["雨", "田", "冂", "小"],
    fakes: [
      ["电", "小", "冂", "田"],
      ["雨", "囟", "小"],
      ["电", "脑", "口"],
    ],
  },
  {
    hanzi: "女生",
    pinyin: "nǚshēng",
    parts: ["女", "生"],
    fakes: [
      ["女", "牛"],
      ["女", "并"],
      ["女", "土"],
    ],
  },
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function Page() {
  const [current, setCurrent] = useState(getRandomItem(hanziData));
  const [frontOptions, setFrontOptions] = useState([]);
  const [backOptions, setBackOptions] = useState([]);
  const [selectedFront, setSelectedFront] = useState(null);
  const [selectedBack, setSelectedBack] = useState(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const allFronts = [current.parts[0], ...current.fakes.map((f) => f[0])];
    const allBacks = [current.parts[1], ...current.fakes.map((f) => f[1])];
    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
    setFrontOptions(shuffle([...new Set(allFronts)]).slice(0, 4));
    setBackOptions(shuffle([...new Set(allBacks)]).slice(0, 4));
    setSelectedFront(null);
    setSelectedBack(null);
  }, [current]);

  useEffect(() => {
    if (selectedFront && selectedBack) {
      const correct =
        selectedFront === current.parts[0] && selectedBack === current.parts[1];
      setFeedback(correct ? "✅ Correct!" : "❌ Wrong!");

      setTimeout(() => {
        setCurrent(getRandomItem(hanziData));
        setFeedback("");
      }, 1000);
    }
  }, [selectedFront, selectedBack]);

  return (
    <div className="relative w-screen h-screen overflow-hidden font-sans text-white flex justify-center items-center">
      {/* YouTube Background */}
      <div className="absolute inset-0 z-0">
        <YouTube
          videoId="H3c0F3oGZ4I" // change to your preferred background
          opts={{
            playerVars: {
              autoplay: 1,
              loop: 1,
              mute: 1,
              playlist: "H3c0F3oGZ4I", // needed for loop
              controls: 0,
              showinfo: 0,
              modestbranding: 1,
            },
          }}
          className="w-full h-full"
          iframeClassName="w-full h-full absolute top-0 left-0 pointer-events-none"
        />
        <div className="absolute inset-0 opacity-60"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-[1000px] flex flex-col items-center justify-center h-[600px] space-y-6 bg-black/90 rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold">🀄 Hanzi Build</h1>
        <h2 className="text-2xl font-medium bg-white text-black px-4 py-1 rounded-full">
          {current.pinyin}
        </h2>

        <div className="flex gap-12">
          <div>
            <h3 className="mb-2 text-xl">Choose Front</h3>
            <div className="grid grid-cols-2 gap-4">
              {frontOptions.map((part, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedFront(part)}
                  className={`w-20 h-20 text-3xl rounded-xl border ${
                    selectedFront === part
                      ? "bg-green-500"
                      : "bg-white text-black hover:scale-105"
                  }`}
                >
                  {part}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-xl">Choose Back</h3>
            <div className="grid grid-cols-2 gap-4">
              {backOptions.map((part, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedBack(part)}
                  className={`w-20 h-20 text-3xl rounded-xl border ${
                    selectedBack === part
                      ? "bg-green-500"
                      : "bg-white text-black hover:scale-105"
                  }`}
                >
                  {part}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <span className="text-xl">{feedback}</span>
        </div>
      </div>
    </div>
  );
}
