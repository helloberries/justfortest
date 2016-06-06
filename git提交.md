#### 1. 确认name与email
（email与github要一致，否则提交代码不会呈现在contribution里）

`git config --global user.name "Your name"`

`git config --global user.email "you@example.com"`

#### 2. clone你的repo
`git clone git@github.com:YourDirectory/YourProject.git`

#### 3. 确认地址(提交时出现error可选用)
`git remote set-url origin git
@github.com:YourDirectory/YourProject.git`

#### 4. add文件
`git add .` add上所有文件

#### 5. commit
第一种：
`git commit -m "Title" -m "Description..."` 写好message和Description


第二种：
`git commit`

填写message之后：

press Esc
type ":wq" (without quotes)
Press Enter


#### 6. push
`git push`

#### 7. 查看有没有contribution
