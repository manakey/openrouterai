# OpenRouter AI Chat Application

OpenRouter APIを使用した、クッキー保存機能付きの本格的なAIチャットサイトです。

## 🛠️ ローカルでの実行方法

1. 依存パッケージのインストール:
   ```bash
   npm install
   ```
2. プロジェクトのルートに `.env` ファイルを作成し、OpenRouterのAPIキーを記述:
   ```text
   OPENROUTER_API_KEY=あなたのAPIキー
   ```
3. サーバーの起動:
   ```bash
   npm start
   ```
4. ブラウザで `http://localhost:3000` にアクセスします。

## 🚀 Renderへのデプロイ手順

### ステップ 1: GitHubへプッシュ
1. 本プロジェクトをGitHubのリポジトリにプッシュします。
   - ⚠️ **注意**: `.env` ファイルや `node_modules/` はGitHubに公開しないよう `.gitignore` に含めてください。

### ステップ 2: Renderでの設定
1. [Render](https://render.com) にログインし、ダッシュボードを開きます。
2. **「New +」** ボタンから **「Web Service」** を選択します。
3. 先ほど作成したGitHubリポジトリを連携・選択します。
4. 設定項目を以下のように入力します:
   - **Name**: `openrouter-ai-chat` (任意の名前)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. 下部にある **「Advanced」** をクリックし、**「Add Environment Variable」** で環境変数を追加します:
   - **Key**: `OPENROUTER_API_KEY`
   - **Value**: `(あなたのOpenRouterのAPIキー)`
6. **「Deploy Web Service」** をクリックするとビルドが始まり、数分でサイトが世界中に公開されます！
