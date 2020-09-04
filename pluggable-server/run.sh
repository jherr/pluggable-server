docker run -p 3000:3000 \
  --mount type=bind,source="$(pwd)"/../plugins,target=/usr/src/plugins \
  -t pluggable-server