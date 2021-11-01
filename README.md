# 心理雲 Cloud Consultation

## 協作初始化

1. git clone https://github.com/davidchen233/psycloud.git
2. npm install

---

## 協作規範

- frontend
  - 路由: 
  - router 會統一放在 index，前期各自作業時請不要 push 上來
  
- backend
  - 路由: 
  - 單一資料回傳 -> 物件
  

## git flow

- 可以參考 [Git Flow 與 Commit 團隊協作規範](https://syj0905.github.io/git/20201104/138987188/)
- 建立各自作業的 develop branch
- - 有事沒事就 pull 一下
- 請勿直接在 master 分支 修改/ commit
- 時常 commit，內容要簡潔明瞭的描述本次的 commit 內容
- 一個功能 commit 一次，不要做了很多功能才一次 commit
- 請勿自行 merge，請發 pull request 並請一位組員協助 code review

---

## 已加入的套件

> 專案設定用

- ESLint 與 Prettier
- [prop types](https://zh-hant.reactjs.org/docs/typechecking-with-proptypes.html) -f
- [react router dom](https://reactrouter.com/web/guides/quick-start) -f
- jquery -f <br>
  (import $ from 'jquery' / 在 componentDidMount 階段使用)
- [axios](https://github.com/axios/axios) -(f + b)
- [dotenv](https://github.com/motdotla/dotenv#readme) -b
- [bluebird](https://github.com/petkaantonov/bluebird) -b
- [mysql](https://github.com/mysqljs/mysql) -b

> 樣式工具

- sass
- [react bootstrap 5.1.0](https://react-bootstrap.github.io/) -f
- [react icon](https://react-icons.github.io/react-icons/) -f

> 獨立套件

- [full calendar](https://fullcalendar.io/docs#toc) (daygrid / interaction) -f
