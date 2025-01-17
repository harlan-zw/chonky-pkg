<h1 align='center'>🦭 chonky-pkg</h1>

<p align="center">
<a href='https://github.com/harlan-zw/chonky-pkg/actions/workflows/ci.yml'>
<img src='https://github.com/harlan-zw/chonky-pkg/actions/workflows/ci.yml/badge.svg' >
</a>
<a href="https://www.npmjs.com/package/pkg-name" target="__blank"><img src="https://img.shields.io/npm/v/pkg-name?color=2B90B6&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/pkg-name" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/pkg-name?color=349dbe&label="></a>
<br>
</p>


<p align="center">
Flexible package template based on <a href="https://github.com/antfu/starter-ts">starter-ts</a> for monorepos.
</p>

<p align="center">
<table>
<tbody>
<td align="center">
<img width="2000" height="0" /><br>
<i>Status:</i> <b>Early Access</b> <br>
<sup> Please report any issues 🐛</sup><br>
<sub>Made possible by my <a href="https://github.com/sponsors/harlan-zw">Sponsor Program 💖</a><br> Follow me <a href="https://twitter.com/harlan_zw">@harlan_zw</a> 🐦</sub><br>
<img width="2000" height="0" />
</td>
</tbody>
</table>
</p>

## Features

- 🦭 Monorepo design, keep build dependencies far away from your package dependencies.
- 💅 Automated GitHub releases with [changelogen](https://github.com/unjs/changelogen)
- 🌳 Setup for [npm scopes](https://docs.npmjs.com/cli/v8/using-npm/scope)
- 🤖 CI lints and commits changes
- ✨ Based on <a href="https://github.com/antfu/starter-ts">starter-ts</a>: [unbuild](https://github.com/unjs/unbuild), [vitest](https://github.com/vitest-dev/vitest), [pnpm@7](https://github.com/pnpm/pnpm), etc

## Usage

1. Use the template
2. Search-replace `chonky-pkg` -> `your-package`
3. Configure your github actions (need write permissions and NPM_TOKEN secret).

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/harlan-zw/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/harlan-zw/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2022 [Harlan Wilton](https://github.com/harlan-zw)
