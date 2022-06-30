import Head from "next/head";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title> 絵本</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-12 min-h-screen">
      <h1 className="text-4xl font-bold">ほいけんたのホームページ</h1>
<p className="text-xl">キャッチコピーは
<span className="text-red-500">さんまさんのものまね芸人</span>です。
</p>

<h2　className="mt-8 text-2xl font-semibold">プロフィール</h2>
<ul>
  <li>7月7日生まれ</li>
  <li>かに座</li>
  <li>好物はさんまの塩焼き</li>
</ul>
<h1 className="mt-8 text-2xl font-semibold">小さいころ読んだ絵本3選</h1>
<div className="flex flex-col gap-8 items-center mt-8 lg:flex-row lg:justify-around ">

<div className="w-72 bg-white rounded-md border ">
  <img
    className="object-contain w-full h-52 rounded-t-xl border-b"
    src="Nonntan.jpg"
    alt="ノンタン"
    />
  <div className="p-4 border">
    <h2 className="text-lg font-bold text-gray-800 underline">
      <a
        href="https://www.kaiseisha.co.jp/special/nontan/"
        target="_blank"
        rel="noopener noreferrer"
        >
        ノンタン
      </a>
    </h2>
    <h3 className="mt-0.5 text-gray-800">香川豊</h3>
    <div className="inline-block  py-0.5 px-3  mr-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
      絵本
    </div>
    <div className="inline-block py-0.5 px-3  mr-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
      日常系
    </div>
  </div>
</div>
<div className="w-72 bg-white rounded-md border ">
  <img
    className="object-contain w-full h-52 rounded-t-xl border-b"
    src="Nonntan.jpg"
    alt="ノンタン"
    />
  <div className="p-4 border">
    <h2 className="text-lg font-bold text-gray-800 underline">
      <a
        href="https://www.kaiseisha.co.jp/special/nontan/"
        target="_blank"
        rel="noopener noreferrer"
        >
        ノンタン
      </a>
    </h2>
    <h3 className="mt-0.5 text-gray-800">香川豊</h3>
    <div className="inline-block  py-0.5 px-3  mr-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
      絵本
    </div>
    <div className="inline-block py-0.5 px-3  mr-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
      日常系
    </div>
  </div>
</div>
<div className="w-72 bg-white rounded-md border ">
  <img
    className="object-contain w-full h-52 rounded-t-xl border-b"
    src="Nonntan.jpg"
    alt="ノンタン"
    />
  <div className="p-4 border">
    <h2 className="text-lg font-bold text-gray-800 underline">
      <a
        href="https://www.kaiseisha.co.jp/special/nontan/"
        target="_blank"
        rel="noopener noreferrer"
        >
        ノンタン
      </a>
    </h2>
    <h3 className="mt-0.5 text-gray-800">香川豊</h3>
    <div className="inline-block  py-0.5 px-3  mr-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
      絵本
    </div>
    <div className="inline-block py-0.5 px-3  mr-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
      日常系
    </div>
  </div>
</div>
</div>
</main>
</div>
);
};
export default Home
