# n_nextjs

## SetUp (수동 설정)
1. 원하는 폴더에 들어가서 vscode 터미널 열고 npm init -y -> package.json 생성 (license는 MIT로 변경)
2. 터미널에 npm install react@latest next@latest react-dom@latest 입력, react, next, react-dom 설치
3. package.json의 "script" 부분에 "test" 지우고 "dev" : "next dev" 입력 (dev 명령어 실행 시 Next JS 실행됨)
4. app폴더 안에 page.jsx 생성 (NextJS는 실행할 때 app 폴더 안의 page라는 파일을 찾아보기 때문에 이름 틀리지 않고 꼭 저렇게 써야함 (프레임워크 특성))
5. page.jsx에 간단한 렌더링 테스트를 실행하면 자동으로 layout.js를 생성해줌 (실행 : npm run dev)
<img width="1370" height="982" alt="image" src="https://github.com/user-attachments/assets/9844d4ca-3f4a-4c24-86e4-f3b4d4569972" />
- TypeScript로 바꾸고 싶으면 파일 뒤에 확장자명을 tsx로 바꾸고 npm run dev 실행하면 알아서 ts를 다 다운받아줌

## Router
- app 폴더 바로 하위에 있는 page.tsx는 Home 페이지 ("/"), 즉 root 페이지가 됨
- 다른 라우팅 페이지를 만들기 위해서는 app 폴더 하위에 url 경로의 폴더를 만들어 그 안에 page.tsx를 만들고 ui를 return해주면 해당 경로에 페이지가 생김
- 폴더 안에 폴더를 만들면 "/폴더/폴더" 이런 경로가 되고 해당 폴더에 page.tsx가 없으면 404페이지가 뜨고 그저 경로의 일부분이 되는거임

## NotFound Page
- app 폴더 바로 하위에 not-found.tsx를 생성하고 ui를 return하면 잘못된 url 페이지로 접속 시 not-found.tsx에서 커스텀한 페이지가 뜸

## Navigation Component
- app 폴더와 동일한 위치에 components 폴더를 만들고 navigation.tsx 파일 생성
- react와 같이 a태그를 사용하는 것이 아닌 next에서 기본적으로 제공해주는 "Link"를 import해서 사용. (<Link href="/">Home</Link>)
- 이 컴포넌트를 app에서 import한 후 사용하면 됨

### usePathname()
- nextjs에서 제공해주는 hook
- 현재 어느 페이지에 있는지 url 정보를 알려줌
- 이 훅을 사용하려면 코드 최상단에 "use client"; 를 넣어줘야 오류가 안뜸

## CSR vs SSR
- CSR (Client Side Rendering)은 초기 웹 페이지가 로딩될 때 html에 아무 것도 없고 클라이언트가 js파일을 다 다운 받은 후 뜨기 때문에 초기 로딩 속도의 문제, SEO에 문제가 있음
- SSR (Server Side Rendering)은 초기 웹 페이지가 로딩될 때 서버에서 보내주기 때문에 html에 모든 정보가 들어있어 SEO에 유리함. 또한 위에 use client를 넣어준다고 하더라도 모든 컴포넌트와 페이지들이 백엔드에서 랜더링되고 HTML로 변환됨

### hydration
- 단순 HTML을 React application으로 초기화하는 작업
- JS를 로드하지 않은 단순 HTML을 먼저 받은 후 리액트를 initialize해서 JS에 적한 기능들을 수행하도록 함
- JS를 disabled하면 화면에 단순 html만 보이고 인터랙티브한 활동들은 하지 못함

### use client
- SSR로 backend에서 모든 것이 render 되고, frontend에서 hydrate 및 interactive 됨을 의미.
- use client를 쓰지 않은 곳들은 server component. 사용자가 다운로드받을 JS의 양이 적어짐을 의미.
- server component 안에 client component를 갖는건 가능하지만 client component 안에 server component를 갖는건 불가. 왜냐하면 최상단에 use client가 쓰이게 되면 client component가 되는데 그 안에 use client를 쓰지 않은 component를 import 해도 client component 안에 있게 되는거기 때문에 어쩔 수 없이 hydrate 과정을 거치게 됨.