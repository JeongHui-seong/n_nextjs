# n_nextjs

## SetUp (수동 설정)
1. 원하는 폴더에 들어가서 vscode 터미널 열고 npm init -y -> package.json 생성 (license는 MIT로 변경)
2. 터미널에 npm install react@latest next@latest react-dom@latest 입력, react, next, react-dom 설치
3. package.json의 "script" 부분에 "test" 지우고 "dev" : "next dev" 입력 (dev 명령어 실행 시 Next JS 실행됨)
4. app폴더 안에 page.jsx 생성 (NextJS는 실행할 때 app 폴더 안의 page라는 파일을 찾아보기 때문에 이름 틀리지 않고 꼭 저렇게 써야함 (프레임워크 특성))
5. page.jsx에 간단한 렌더링 테스트를 실행하면 자동으로 layout.js를 생성해줌 (실행 : npm run dev)
<img width="1370" height="982" alt="image" src="https://github.com/user-attachments/assets/9844d4ca-3f4a-4c24-86e4-f3b4d4569972" />
