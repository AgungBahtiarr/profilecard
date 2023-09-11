"use client";
import useSWR from "swr";

function getData(ambilPrompt) {
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
  };
  const fetcher = (url) =>
    fetch(url, {
      method: "POST",
      headers: header,
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: ambilPrompt }],
        temperature: 0.7,
      }),
    }).then((res) => (res.ok ? res.json() : "error"));

  const { data, error, isLoading } = useSWR(
    "https://api.openai.com/v1/chat/completions",
    fetcher
  );
  return [data, error, isLoading];
}

function Api(props) {
  const data = getData(props.prompt);
  console.log(data[1]);
  if (data[0] === "error") {
    return <>Maaf saya akan belajar lagi..</>;
  } else {
    return <>{data[0] && JSON.stringify(data[0].choices[0].message.content)}</>;
  }
}

export default Api;

// export async function getData(ambilPrompt) {
// const header = {
// "Content-Type": "application/json",
// Authorization: `Bearer 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`,
// };

// const res = await fetch("https://api.openai.com/v1/chat/completions", {
// method: "POST",
// headers: header,
// body: JSON.stringify({
// model: "gpt-3.5-turbo",
// messages: [{ role: "user", content: ambilPrompt }],
// temperature: 0.7,
// }),
// }
// ).json();
// return res;
// }
