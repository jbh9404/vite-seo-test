// type PrerenderData = { url: string };

// export async function prerender(data: PrerenderData) {
//   let title = "기본 제목";
//   let description = "기본 설명";
//   let ogTitle = "기본 오픈그래프 제목";

//   // 페이지별로 조건 분기
//   switch (data.url) {
//     case "/":
//       title = "홈페이지";
//       description = "홈페이지 설명";
//       ogTitle = "홈페이지 오픈그래프 제목";
//       break;
//     case "/contact":
//       title = "소개 페이지";
//       description = "소개 페이지 설명";
//       ogTitle = "소개 페이지 오픈그래프 제목";
//       break;
//     case "/setting":
//       title = "상품 1 상세";
//       description = "상품 1 설명";
//       ogTitle = "상품 1 오픈그래프 제목";
//       break;
//     default:
//       title = "기본 페이지";
//       description = "기본 페이지 설명";
//       ogTitle = "기본 오픈그래프 제목";
//   }

//   return {
//     html: "", // React가 렌더링하므로 빈 문자열 처리
//     links: new Set(["/contact", "/setting"]), // 추가 프리렌더 경로
//     data: { url: data.url },
//     head: {
//       lang: "ko",
//       title,
//       elements: new Set([
//         { type: "meta", props: { name: "description", content: description } },
//         { type: "meta", props: { property: "og:title", content: ogTitle } },
//       ]),
//     },
//   };
// }

export async function prerender(data: { url: string }) {
  return {
    html: "", // React가 클라이언트에서 렌더링
    links: new Set(["/contact", "/setting"]),
    data: { url: data.url },
  };
}
