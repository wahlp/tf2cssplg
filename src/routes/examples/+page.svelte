<svelte:head>
    <title>tf2cssplg2 | Examples</title> 
</svelte:head>

<h1>Examples of what can be used as input data</h1>

<div>
  <h3>Basic example</h3>
  <code>
hostname: Valve Matchmaking Server (Hong Kong srcds1234-hkg56 #7)
version : 6986594/24 6986594 secure
udp/ip  : 169.254.123.234:61736
steamid : [A:1:1234567901:23456] (78901234567890123)
account : not logged in  (No account specified)
map     : pl_pier at: 0 x, 0 y, 0 z
tags    : hidden,payload,valve
players : 19 humans, 0 bots (32 max)
edicts  : 1235 used of 2048 max
# userid name                uniqueid            connected ping loss state
#   1147 "player1"           [U:1:123456789]     00:20     93   17   active
#   1145 "player2"           [U:1:234567891]     01:06     62   0    active
#   1142 "player3"           [U:1:123456789]     01:26     86   0    active
#   1129 "player4"           [U:1:234567891]     02:33     78   0    active
#   1130 "player5"           [U:1:123456789]     02:29     86   0    active
#   1131 "player6"           [U:1:234567891]     02:29     93   0    active
#   1132 "player7"           [U:1:123456789]     02:28     86   0    active
#   1119 "player8"           [U:1:234567891]     05:16     82   0    active
#   1133 "player9"           [U:1:123456789]     02:27     83   0    active
#   1121 "player10"          [U:1:234567891]     05:15     65   0    active
#   1146 "player11"          [U:1:123456789]     00:58     43   0    active
#   1123 "player12"          [U:1:234567891]     05:14     105  18   active
#   1124 "player13"          [U:1:123456789]     05:08     211  0    active
#   1125 "player14"          [U:1:234567891]     05:00     80   0    active
#   1148 "player15"          [U:1:123456789]     00:11     74   75   spawning
#   1149 "player16"          [U:1:234567891]     00:04     679  77   spawning
#   1136 "player17"          [U:1:123456789]     02:01     69   0    active
#   1138 "player18"          [U:1:234567891]     01:56     1038 58   active
#   1144 "player19"          [U:1:123456789]     01:10     68   0    active
  </code>
  
  <h3>Uglier but still functional</h3>
  <code>
hostname: Valve Matchmaking Server (Hong Kong srcds1234-hkg56 #7)
version : 6986594/24 6986594 secure
udp/ip  : 169.254.200.190:53328
steamid : [A:1:1446477828:19552] (90155969194459140)
#   2635 "abcde12345"        [U:1:123456789]    12:39      116    0 active
account : not logged in  (No account specified)
#   2647 "asfasdr"           [U:1:234567891]    00:39       71    0 active
map     : pl_barnblitz at: 0 x, 0 y, 0 z
#   2648 "ljh qert"          [U:1:123456789]      00:33       69    0 active
tags    : hidden,increased_maxplayers,payload,valve
#   2646 "fjkllfmem-"         [U:1:234567891]     01:55       92    0 active
players : 20 humans, 0 bots (32 max)
#   2649 "Afgvzxd"             [U:1:123456789]    00:32       67    0 active
edicts  : 1325 used of 2048 max
#   2657 "DasdSdfg"            [U:1:234567891]      00:01      429   42 spawning
# userid name                uniqueid            connected ping loss state
#   2651 "Sfa,msdnsf"        [U:1:123456789]     00:25      123    0 active
#   2652 "dgfhdd"               [U:1:234567891]      00:24       40    0 active
#   2620 "f  e q sfgdsf"     [U:1:123456789]    17:17      121    0 active
#   2653 "Eghgfhtryt"           [U:1:234567891]     00:20      117   19 active
#   2654 "oiljzxi4"           [U:1:123456789]     00:19       80   69 active
#   2627 "podisg"              [U:1:234567891]    14:08       60    0 active
#   2609 "xcvhj ioreut"      [U:1:123456789]     19:20      113    0 active
#   2655 "ipoeurasd"        [U:1:234567891]     00:19      110   76 spawning
#   2656 "sdfgbrew235"             [U:1:123456789]     00:09      151   76 spawning
#   2612 "HJKFD hdfg UTYORWU" [U:1:234567891] 19:11       75    0 active
#   2613 "lgjxcvgwads"         [U:1:123456789]    19:09       72    0 spawning
#   2642 "t09uw4"              [U:1:234567891]    09:10       57    0 active
#   2586 "3f89hr"           [U:1:123456789]    25:21       87    0 active
#   2643 "7y98vf"           [U:1:234567891]     08:43      114    0 active
  </code>
</div>

<style>
  div {
    margin-left: 20px;
  }

  code {
    display: inline-block;
    white-space: pre-wrap;
    background: #333;
    padding: 20px;
    margin-bottom: 20px;
  }
</style>