## environemnt

```
Linux 166db0df2bb3 5.15.0-33-generic #34-Ubuntu SMP Wed May 18 13:34:26 UTC 2022 x86_64 GNU/Linux


processor       : 15
vendor_id       : GenuineIntel
cpu family      : 6
model           : 167
model name      : Intel(R) Xeon(R) E-2378G CPU @ 2.80GHz
stepping        : 1
microcode       : 0x4c
cpu MHz         : 800.000
cache size      : 16384 KB
physical id     : 0
siblings        : 16
core id         : 7
cpu cores       : 8
apicid          : 15
initial apicid  : 15
fpu             : yes
fpu_exception   : yes
cpuid level     : 27
wp              : yes
flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc art arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf tsc_known_freq pni pclmulqdq dtes64 monitor ds_cpl vmx smx est tm2 ssse3 sdbg fma cx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm abm 3dnowprefetch cpuid_fault epb invpcid_single ssbd ibrs ibpb stibp ibrs_enhanced tpr_shadow vnmi flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid mpx avx512f avx512dq rdseed adx smap avx512ifma clflushopt intel_pt avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves dtherm ida arat pln pts avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid fsrm md_clear flush_l1d arch_capabilities
vmx flags       : vnmi preemption_timer posted_intr invvpid ept_x_only ept_ad ept_1gb flexpriority apicv tsc_offset vtpr mtf vapic ept vpid unrestricted_guest vapic_reg vid ple shadow_vmcs pml ept_mode_based_exec tsc_scaling
bugs            : spectre_v1 spectre_v2 spec_store_bypass swapgs
bogomips        : 5616.00
clflush size    : 64
cache_alignment : 64
address sizes   : 39 bits physical, 48 bits virtual
```

### http-raw deno

```
Running 10s test @ http://localhost:7000/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   368.69us  219.52us   4.83ms   95.22%
    Req/Sec   146.21k    13.77k  172.52k    92.50%
  2908563 requests in 10.03s, 352.28MB read
Requests/sec: 290041.02
Transfer/sec:     35.13MB
```

```
Running 10s test @ http://localhost:7000/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   370.10us  218.03us   4.90ms   95.41%
    Req/Sec   145.42k    13.69k  164.94k    87.00%
  2891695 requests in 10.03s, 350.23MB read
Requests/sec: 288311.49
Transfer/sec:     34.92MB
```

```
Running 10s test @ http://localhost:7000/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   373.44us  360.51us  14.60ms   96.37%
    Req/Sec   147.21k     9.53k  175.85k    85.50%
  2928943 requests in 10.03s, 354.74MB read
Requests/sec: 291964.77
Transfer/sec:     35.36MB
```

### http-raw spindle

```
Running 10s test @ http://localhost:6000/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   589.02us    4.67ms 113.19ms   99.20%
    Req/Sec   227.68k    29.22k  248.10k    97.00%
  4528026 requests in 10.04s, 557.06MB read
Requests/sec: 450883.28
Transfer/sec:     55.47MB
```

```
Running 10s test @ http://localhost:6000/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   291.96us    1.47ms  64.04ms   99.64%
    Req/Sec   229.21k    23.69k  250.46k    97.00%
  4559422 requests in 10.03s, 560.92MB read
Requests/sec: 454412.19
Transfer/sec:     55.90MB
```

```
Running 10s test @ http://localhost:6000/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   346.59us    2.19ms  77.87ms   99.52%
    Req/Sec   229.90k    25.17k  256.83k    97.00%
  4572982 requests in 10.04s, 562.59MB read
Requests/sec: 455523.98
Transfer/sec:     56.04MB
```

### http-raw node

```
Running 10s test @ http://localhost:8000/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.19ms    1.18ms  39.75ms   98.85%
    Req/Sec    44.82k     4.96k   47.80k    97.00%
  891942 requests in 10.02s, 113.98MB read
Requests/sec:  89028.78
Transfer/sec:     11.38MB
```

```
Running 10s test @ http://localhost:8000/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.17ms  526.46us  21.74ms   98.87%
    Req/Sec    44.04k     4.27k   46.66k    97.00%
  875988 requests in 10.03s, 111.94MB read
Requests/sec:  87363.18
Transfer/sec:     11.16MB
```

```
Running 10s test @ http://localhost:8000/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.21ms  594.22us  22.91ms   98.80%
    Req/Sec    42.90k     4.43k   45.82k    98.00%
  853739 requests in 10.03s, 109.10MB read
Requests/sec:  85137.34
Transfer/sec:     10.88MB
```

### http-raw bun

```
Running 10s test @ http://localhost:9000/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   278.64us   56.67us   4.47ms   97.04%
    Req/Sec   179.87k    13.10k  196.47k    89.50%
  3577143 requests in 10.04s, 433.25MB read
Requests/sec: 356299.97
Transfer/sec:     43.15MB
```

```
Running 10s test @ http://localhost:9000/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   273.96us   58.63us   2.47ms   94.29%
    Req/Sec   182.40k    16.73k  201.32k    93.00%
  3629391 requests in 10.04s, 439.58MB read
Requests/sec: 361659.26
Transfer/sec:     43.80MB
```

```
Running 10s test @ http://localhost:9000/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   265.74us   44.11us   2.78ms   95.71%
    Req/Sec   187.32k    10.26k  208.43k    84.50%
  3725475 requests in 10.03s, 451.22MB read
Requests/sec: 371552.85
Transfer/sec:     45.00MB
```

### http-express deno

```
Running 10s test @ http://localhost:7001/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.84ms    3.55ms  70.68ms   96.64%
    Req/Sec    11.00k     1.59k   12.12k    96.00%
  219110 requests in 10.04s, 39.91MB read
Requests/sec:  21826.48
Transfer/sec:      3.98MB
```

```
Running 10s test @ http://localhost:7001/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.83ms    2.64ms  54.00ms   96.44%
    Req/Sec    10.82k     1.49k   12.12k    96.00%
  215279 requests in 10.04s, 39.21MB read
Requests/sec:  21431.72
Transfer/sec:      3.90MB
```

```
Running 10s test @ http://localhost:7001/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.77ms    1.36ms  27.48ms   96.11%
    Req/Sec    10.65k     1.18k   11.56k    96.00%
  212000 requests in 10.06s, 38.62MB read
Requests/sec:  21083.91
Transfer/sec:      3.84MB
```

### http-express node

```
Running 10s test @ http://localhost:8001/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     6.86ms    1.13ms  34.33ms   90.25%
    Req/Sec     7.34k   634.21     7.82k    94.00%
  146062 requests in 10.02s, 33.15MB read
Requests/sec:  14572.06
Transfer/sec:      3.31MB
```

```
Running 10s test @ http://localhost:8001/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     6.82ms    0.98ms  24.32ms   87.91%
    Req/Sec     7.37k   603.60     7.95k    95.00%
  146742 requests in 10.04s, 33.31MB read
Requests/sec:  14617.81
Transfer/sec:      3.32MB
```

```
Running 10s test @ http://localhost:8001/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.07ms    1.18ms  34.30ms   89.56%
    Req/Sec     7.12k   601.92     7.57k    94.50%
  141701 requests in 10.02s, 32.16MB read
Requests/sec:  14138.50
Transfer/sec:      3.21MB
```

### http-express bun

```
Running 10s test @ http://localhost:9001/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     5.25ms    1.79ms  55.53ms   95.46%
    Req/Sec     9.73k   805.14    10.10k    98.00%
  193639 requests in 10.03s, 35.27MB read
Requests/sec:  19308.77
Transfer/sec:      3.52MB
```

```
Running 10s test @ http://localhost:9001/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     5.20ms    1.53ms  61.90ms   93.94%
    Req/Sec     9.78k   819.63    10.14k    98.00%
  194643 requests in 10.04s, 35.45MB read
Requests/sec:  19384.80
Transfer/sec:      3.53MB
```

```
Running 10s test @ http://localhost:9001/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     5.23ms    1.77ms  51.65ms   94.95%
    Req/Sec     9.77k     0.89k   10.16k    98.00%
  194415 requests in 10.04s, 35.41MB read
Requests/sec:  19371.59
Transfer/sec:      3.53MB
```

### http-preactssr deno

```
Running 10s test @ http://localhost:7002/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   566.53us    0.91ms  30.36ms   99.22%
    Req/Sec    97.23k     9.64k  107.19k    97.00%
  1934561 requests in 10.03s, 396.66MB read
Requests/sec: 192848.20
Transfer/sec:     39.54MB
```

```
Running 10s test @ http://localhost:7002/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   552.29us  177.91us   6.50ms   93.24%
    Req/Sec    92.42k     8.16k  101.91k    88.00%
  1838186 requests in 10.05s, 376.90MB read
Requests/sec: 182969.58
Transfer/sec:     37.52MB
```

```
Running 10s test @ http://localhost:7002/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   531.41us  550.78us  22.04ms   97.19%
    Req/Sec    99.72k     7.45k  108.41k    96.00%
  1983467 requests in 10.03s, 406.69MB read
Requests/sec: 197803.04
Transfer/sec:     40.56MB
```

### http-preactssr node

```
Running 10s test @ http://localhost:8002/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.62ms    1.22ms  38.72ms   98.58%
    Req/Sec    32.82k     3.98k   34.63k    97.00%
  652834 requests in 10.02s, 163.12MB read
Requests/sec:  65133.30
Transfer/sec:     16.27MB
```

```
Running 10s test @ http://localhost:8002/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.48ms  584.69us  22.57ms   98.71%
    Req/Sec    34.55k     3.42k   36.01k    97.00%
  687640 requests in 10.04s, 171.82MB read
Requests/sec:  68522.99
Transfer/sec:     17.12MB
```

```
Running 10s test @ http://localhost:8002/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.66ms    2.11ms  59.74ms   98.45%
    Req/Sec    33.60k     4.59k   35.34k    97.00%
  668780 requests in 10.05s, 167.10MB read
Requests/sec:  66515.93
Transfer/sec:     16.62MB
```

### http-preactssr bun

```
Running 10s test @ http://localhost:9002/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   338.61us   67.93us   4.20ms   97.33%
    Req/Sec   147.63k    10.63k  156.90k    96.00%
  2937242 requests in 10.02s, 361.35MB read
Requests/sec: 293081.88
Transfer/sec:     36.06MB
```

```
Running 10s test @ http://localhost:9002/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   419.76us    1.53ms  42.07ms   99.61%
    Req/Sec   147.38k    10.06k  158.55k    95.50%
  2931221 requests in 10.04s, 360.61MB read
Requests/sec: 291993.25
Transfer/sec:     35.92MB
```

```
Running 10s test @ http://localhost:9002/
  2 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   492.36us    2.00ms  50.55ms   99.53%
    Req/Sec   134.92k    14.07k  144.35k    95.00%
  2683906 requests in 10.02s, 330.18MB read
Requests/sec: 267802.35
Transfer/sec:     32.95MB
```

