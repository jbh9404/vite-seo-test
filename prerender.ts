// prerender.ts
type PrerenderData = { url: string };

export async function prerender(data: PrerenderData) {
  // 프리렌더 동작 예시: 단순 HTML 반환
  const html = `<h1>Hello World</h1>`;

  return {
    html,
    links: new Set(["/about", "/products/1"]), // 추가 프리렌더링 링크
    data: { url: data.url, prerenderedAt: new Date().toISOString() },
    head: {
      lang: "ko",
      title: "메인페이지",
      elements: new Set([
        { type: "meta", props: { name: "description", content: "SEO 설명" } },
        {
          type: "meta",
          props: { property: "og:title", content: "오픈그래프 제목" },
        },
      ]),
    },
  };
}
