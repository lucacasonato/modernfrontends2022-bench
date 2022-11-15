FROM debian:bookworm-slim
RUN apt update -y
RUN apt install -y curl make g++ autoconf libtool unzip xz-utils
WORKDIR /bench

# wrk
RUN curl -L -o wrk.tar.gz https://github.com/wg/wrk/archive/refs/tags/4.2.0.tar.gz
RUN tar -zxvf wrk.tar.gz
RUN make -j8 -C wrk-4.2.0/
RUN mkdir -p /root/.wrk/bin && cp wrk-4.2.0/wrk /root/.wrk/bin/
RUN rm -fr wrk-4.2.0/
RUN rm wrk.tar.gz

# hyperfine
RUN curl -L -o hyperfine_1.15.0_amd64.deb https://github.com/sharkdp/hyperfine/releases/download/v1.15.0/hyperfine_1.15.0_amd64.deb
RUN dpkg -i hyperfine_1.15.0_amd64.deb
RUN rm hyperfine_1.15.0_amd64.deb

# node.js 18
RUN curl -L -o nodejs.tar.xz https://nodejs.org/dist/v18.12.1/node-v18.12.1-linux-x64.tar.xz
RUN tar -xvf nodejs.tar.xz
RUN mv node-v18.12.1-linux-x64 /root/.node
ENV NODE_ENV=production
RUN rm nodejs.tar.xz

# spindle
RUN curl -L -o spindle.tar.gz https://github.com/billywhizz/spindle/archive/refs/tags/0.0.4.tar.gz
RUN tar -zxvf spindle.tar.gz
RUN cd spindle-0.0.4 && make full
RUN mv spindle-0.0.4 /root/.spindle
RUN rm spindle.tar.gz

# bun
RUN /bin/bash -o pipefail -c "$(curl -fsSL https://bun.sh/install)"

# deno
RUN /bin/bash -o pipefail -c "$(curl -fsSL https://deno.land/install.sh)"

RUN chown -R root:root /root/.deno/
RUN chown -R root:root /root/.node/
RUN chown -R root:root /root/.wrk/
RUN chown -R root:root /root/.bun/

ENV PATH="/root/.node/bin:/root/.bun/bin:/root/.spindle:/root/.deno/bin:/root/.wrk/bin:$PATH" 

RUN make upgrade
RUN make deps

CMD ["/bin/bash"]
