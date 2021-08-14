
touch deploy

chmod u+x deploy

set -e

yarn install

expo publish --release-channel production --non-interactive

expo build:android --release-channel production --non-interactive --no-publish

# Download the built android binary
curl -o app.apk "$(expo url:apk --non-interactive)"

expo build:ios --release-channel production --non-interactive --no-publish

# Download the artifact to current directory as `app.ipa`
curl -o app.ipa "$(expo url:ipa --non-interactive)"
