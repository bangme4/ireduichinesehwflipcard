"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

const hanziData = [
  { hanzi: "打", pinyin: "dǎ", fakes: ["dá", "dà", "dā"] },
  { hanzi: "球", pinyin: "qiú", fakes: ["qiū", "qiù", "qiǔ"] },
  {
    hanzi: "食堂",
    pinyin: "shítáng",
    fakes: ["shítàng", "shìtáng", "shítāng"],
  },
  { hanzi: "两", pinyin: "liǎng", fakes: ["liáng", "liàng", "liáo"] },
  { hanzi: "聚会", pinyin: "jùhuì", fakes: ["jǔhuì", "jùhuí", "jùhuī"] },
  { hanzi: "祝", pinyin: "zhù", fakes: ["zhú", "zhǔ", "zhū"] },
  { hanzi: "快乐", pinyin: "kuàilè", fakes: ["kuáilè", "kuàilě", "kuàilē"] },
  { hanzi: "碗", pinyin: "wǎn", fakes: ["wán", "wàn", "wān"] },
  {
    hanzi: "葡萄酒",
    pinyin: "pútáojiǔ",
    fakes: ["pútáojiù", "pūtáojiǔ", "pútáoshǔ"],
  },
  { hanzi: "吹", pinyin: "chuī", fakes: ["chuí", "chuǐ", "chūi"] },
  { hanzi: "蜡烛", pinyin: "làzhú", fakes: ["làzhù", "lǎzhú", "làzhǔ"] },
  {
    hanzi: "卡拉OK",
    pinyin: "kǎlā OK",
    fakes: ["kálā OK", "kǎla OK", "kālā OK"],
  },
  { hanzi: "但是", pinyin: "dànshì", fakes: ["dǎnshì", "dànshí", "dānshì"] },
  { hanzi: "晚", pinyin: "wǎn", fakes: ["wán", "wàn", "wān"] },
  {
    hanzi: "放心",
    pinyin: "fàngxīn",
    fakes: ["fǎngxīn", "fàngxín", "fángxīn"],
  },
  {
    hanzi: "美术馆",
    pinyin: "měishùguǎn",
    fakes: ["měishùguàn", "méishùguǎn", "měishuìguǎn"],
  },
  {
    hanzi: "展览",
    pinyin: "zhǎnlǎn",
    fakes: ["zhānlǎn", "zhǎnlán", "zhànlǎn"],
  },
  {
    hanzi: "没意见",
    pinyin: "méiyìjiàn",
    fakes: ["mèiyìjiàn", "méiyìjiān", "méiyìjiàn"],
  },
  { hanzi: "意见", pinyin: "yìjiàn", fakes: ["yǐjiàn", "yìjiān", "yìjián"] },
  { hanzi: "早饭", pinyin: "zǎofàn", fakes: ["záofàn", "zǎofán", "zàofàn"] },
  { hanzi: "找", pinyin: "zhǎo", fakes: ["zháo", "zhào", "zhāo"] },
  { hanzi: "门口", pinyin: "ménkǒu", fakes: ["mēnkǒu", "ménkòu", "mènkǒu"] },
  {
    hanzi: "见面",
    pinyin: "jiànmiàn",
    fakes: ["jiànmián", "jiànmǐan", "jiànmian"],
  },
  {
    hanzi: "电脑",
    pinyin: "diànnǎo",
    fakes: ["diànnào", "diànnáo", "diǎnnǎo"],
  },
  {
    hanzi: "女生",
    pinyin: "nǚshēng",
    fakes: ["nüshēng", "nǚshéng", "nǚshěng"],
  },
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateOptions(entry) {
  const options = new Set();
  options.add(entry.pinyin);

  const shuffledFakes = [...entry.fakes].sort(() => Math.random() - 0.5);
  for (let i = 0; i < shuffledFakes.length && options.size < 4; i++) {
    options.add(shuffledFakes[i]);
  }

  return Array.from(options).sort(() => Math.random() - 0.5); // shuffle
}

function Page() {
  const [current, setCurrent] = useState(getRandomItem(hanziData));
  const [options, setOptions] = useState(generateOptions(current));
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    setOptions(generateOptions(current));
  }, [current]);

  const handleChoice = (choice) => {
    if (choice === current.pinyin) {
      setFeedback("Correct!");
    } else {
      setFeedback("Wrong!");
    }

    setTimeout(() => {
      const next = getRandomItem(hanziData);
      setCurrent(next);
      setFeedback("");
    }, 1000);
  };

  return (
    <>
      <div className="absolute w-screen md:w-0 md:h-0 h-screen bg-white flex justify-center items-center text-black z-50">
        Sorry no mobile version
      </div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="fixed top-0 left-0 pointer-events-none z-[-1]"
        config={{
          youtube: {
            playerVars: {
              controls: 0,
              showinfo: 0,
              modestbranding: 1,
              loop: 1,
              playlist: "hxhi2ttHplw", // needed for loop to work
              disablekb: 1, // disable keyboard
              rel: 0, // disable related videos
            },
          },
        }}
      />
      <div className="absolute w-screen h-10 flex justify-center bottom-6 z-50">
        <h1 className="text-white/90 text-lg font-bold">Made by Iredui</h1>
      </div>
      <div className="w-screen h-screen">
        <div className="w-full h-full bg-black/30 flex justify-center items-center">
          <div className="w-96 h-3/4 bg-white/70 rounded-3xl drop-shadow-3xl flex flex-col items-center justify-around py-6">
            <div className="w-64 h-64 bg-black text-white flex justify-center items-center text-7xl font-bold rounded-2xl">
              {current.hanzi}
            </div>
            <div className="w-64 grid grid-cols-1 gap-3 mb-20">
              {options.map((option, index) => (
                <button
                  key={index}
                  className="w-full h-12 bg-black text-white rounded-xl hover:scale-105 duration-200"
                  onClick={() => handleChoice(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {feedback && (
              <div
                className={`text-2xl font-bold absolute bottom-24 mb-24 ${
                  feedback === "Correct!" ? "text-green-600" : "text-red-600"
                }`}
              >
                {feedback}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
