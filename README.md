## Mô tả : Xây dựng 1 trang web hỗ trợ đầu tư chứng khoán bằng cách dự đoán xu hướng thong qua Machine Learning và các chức năng hỗ trợ người dùng khác.

## Các chức năng:
* Thông báo (<strong>Nofitication</strong>) : Cập nhật tin tức từ các trang báo thông tin về xu hướng chứng khoán và các tin tức chung.
* Phần hỗ trợ người dùng (<strong>Support and information</strong>) : cung cấp các hướng dẫn sử dụng website và các thông tin kiến thức giúp người mới bắt đầu.
* Thông tin cổ phiếu (<strong>Stock infomation</strong>) : Xem thông tin và lịch sử tăng giảm của từng mã cổ phiếu
* Dự đoán xu thế cổ phiếu (<strong>Predict stock trends</strong>) : Xem các xu thế của từng mã cổ phiếu trong tương lai.
* Tạo bài viết bàn luận (<strong>Community</strong>)


## Công nghệ :  
  * <strong>Front-End:</strong> HTML & CSS, JS, ReactJS
  * <strong>Back-End:</strong> Python-Flask or Django / Java-Springboot
  * <strong>Database:</strong> MySQL or PostgreSQL
  * <strong>Training model Machine Learning:</strong> Python-Pytorch, Numpy, TensorFlow, Pandas, Matplotlib
  * <strong>Stock API</strong>: https://github.com/thinh-vu/vnstock & https://github.com/phamdinhkhanh/vnquant
  
## Folder Structure
  support-stock-investment-using-AI-and-fundamental-analysis/
  ├── package.json
  ├── node_modules/  // dependencies for React frontend
  ├── client/
  │   ├── public/
  │   │   └── index.html
  │   ├── src/
  │   │   ├── components/
  │   │   ├── containers/
  │   │   ├── actions/
  │   │   ├── reducers/
  │   │   ├── store.js
  │   │   └── index.js
  │   └── README.md
  ├── server/
  │   ├── app/
  │   │   ├── __init__.py
  │   │   ├── models/
  │   │   ├── routes/
  │   │   ├── schemas/
  │   │   └── utils/
  │   ├── config.py
  │   └── requirements.txt
  └── run.py
