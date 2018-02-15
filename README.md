# Kico

由 Kico Style 修改而来的博客主题，并应用到 SilverBlog 上。

## 安装

``` bash
cd templates
curl https://raw.githubusercontent.com/SilverBlogTheme/kico/master/install.sh | bash
```

## 启用

修改 `config/system.json` 的 `Theme` 配置项为 `kico` 即可。

为了更加精确地显示未来博文的发表时间，请将 `config/system.json` 的 `Time_Format` 值修改为 `%Y-%m-%dT%H:%M:%S.000+08:00`。后面的 `+08:00` 视你服务器的时区而定。更具体的请见 [这里](https://zh.wikipedia.org/wiki/ISO_8601)。

## 更新

``` bash
cd templates/kico
git pull
```

## 开发

本主题在 `SilverBlogTeam` 的仓库里的版本仅用于公开发行，如果需要参与开发，并使用 gulp 编译资源文件，请移步至 [开发仓库](https://github.com/tcdw/kico-dev)。

## 许可 \(License\)

主题使用 BSD3 许可证，但 kico 框架本体使用 MIT 许可证。
