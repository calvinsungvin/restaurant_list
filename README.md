# 餐廳列表

一個使用 Node.js + Express 打造的餐廳美食網站，串接驗證系統及第三方登入，提供用戶擁有自己的美食口袋名單

## 安裝方式
- 將專案clone到本地端
`https://github.com/calvinsungvin/restaurant_lists.git`
- 進入專案資料夾，並下載package
`cd restaurant_lists` &
`npm install`
- 產生種子資料
`npm run seed`
- 透過nodemon啟動專案
`npm run dev`
- 在terminal可以看到 Express is listening on localhost : 3000，開啟瀏覽器在網址列輸入localhost:3000

## 網站功能
1. 點選首頁任一家餐廳，可以看到更多細節
2. 搜尋餐廳之功能
3. 增加餐廳之功能
4. 修改餐廳資訊之功能
5. 刪除餐廳之功能
6. 透過餐廳名字、地址、餐廳分類，去排序餐廳
7. 登入、登出、註冊

## 種子資料
| Account | Password |
| ------ | ------ |
| user1@example.com | 12345678|
| user2@example.com | 12345678 |

## 開發環境
1. bcryptjs: 2.4.3
2. body-parser: 1.19.0
3. connect-flash: 0.1.1
4. dotenv: 8.2.0
5. express: 4.17.1
6. express-handlebars: 5.0.0
7. express-session: 1.17.1
8. method-override: 3.0.0
9. mongoose: 5.9.25
10. multer: 1.4.2
11. passport: 0.4.1
12. passport-facebook: 3.0.0
13. passport-local: 1.0.0

## 截圖
![image info](picture.png)
