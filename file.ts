#!/usr/bin/env -S deno run --allow-net --allow-env --allow-write
import { format } from "https://deno.land/std@0.140.0/datetime/mod.ts";

const now = new Date();
const path = `./source/${format(now, "yyyyMMdd")}.md`;
const template = `---
title: ''
date: ${format(now, "yyyy-MM-dd")}
tags: []
---`;

try {
  await Deno.writeTextFile(path, template);
  console.log("ファイルを作成しました", path);
} catch (err) {
  console.error("ファイルの作成に失敗しました。", err);
}
