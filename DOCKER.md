build the docker image

```
docker build -t bench -f docker/Dockerfile docker/
```

update the gitmodules locally
```
git submodule update --init
``

run the docker image with this repo mounted
```
docker run -it --rm -v $(pwd):/bench --privileged bench
```
