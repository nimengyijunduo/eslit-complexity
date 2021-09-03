### 前端代码质量-圈复杂度

测试项目链接：

+ 定义
    + 圈复杂度是一种代码复杂度的衡量标准，也称为条件复杂度和循环复杂度。简称CC，符号为VG或是M

+ 标准

| 圈复杂度 | 代码状况 | 可测性 | 维护成本 |
| --- | --- | --- | --- |
| 1 - 10 | 清晰、结构化 | 高 | 低 |
| 10 - 20 | 复杂 | 中 | 中 |
| 20 - 30 | 非常复杂 | 低 | 高 |
| > 30 | 不可读 | 不可测 | 非常高 |

+ 计算方法
    + 节点判定法：判定节点的数量上加1（条件和循环都属于一个判定节点）

```
function test(num) {
    if (num > 1) {
        console.log('a');
    };
    for (const i = 0; i < 3; i++) {
        console.log('b');
    }
    switch (num) {
        case 1: 
            console.log('c');
            break;
        case 2:
            console.log('d');
            break;
        default:
            break;
    }
}

此方法中一个if、一个for、一个switch（两个case），复杂度1 + 1 + 2 + 1 = 5（||、&&、三目运算也算作一个判定节点）
```

+ 检测圈复杂度
    + eslint规则：rules => complexity
    + CLIEngile：本地使用自定义的eslint规则扫描代码，获取扫描结果并输出
