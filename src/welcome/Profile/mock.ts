import Mock from 'mockjs';

const mockData = Mock.mock({
  'topList|5-8': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'avatar|1': [
        'https://s3-alpha-sig.figma.com/img/cafb/bfb3/79841c5839bda8db1c23698bcd76f327?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SF46PZmcOXvef5BiYwYhlp0CsUwidgIJvZpUnLWXA0-lSf7vnp9UpeveibOim-VTcDMtatfTDn1TiuJyjRGL~GOI9u7o3g-c52-AH89PesnM1yc9d0chyZ2M4qjDXMgXZem4i4zvDfBK35KC2Pv7ns7mdFW3FdIMWS1SSw5BKfXEAZ7LAh3yGyT5bjmbe4KRu~hld6xZbnlhq4kvLPZFlE0Z1OYlezq5sQwUtZOSPVlkdTq9i8ZLqdZBuMwQ8-uVkmBpof~lI04T~JpO~SLrUtlKlSo2pNw1j4dloJCKX1EAiISrYGIO-P9oudzJ1TEP5tiaZwgulMVIPXGHdNB1sw__',
        'https://s3-alpha-sig.figma.com/img/1203/cf03/bb9345489f0ac2959e0b644729346c7e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f3Urah0O5OcOp8mIQ7jtjLD0iMbfAKvbakQ~k2ewyWpvAGRVRekZV-Ma19Jfmf-AKva5owtQkPMUA8tkcgiyJvyhgsYGPORvpOiK0HDBmSOvdaE8vcz06khkz8D-CWeR-ZSFD-hMlFinB5UNTvLr8-NmCAoR9vZUIF2nx-UIm7x~iYAacs75xBR-y9IAD9A2PcZ7cvpuReqiXKUROORXtzup92zy~j0T7K7-5asVlGwmJjqaDu-s8gK0kk6nLRRR-VajI~hYU7WhM2rqAp2HRPly2uXBNO15cOqp0qg9QUikLe3~FYl7UPO7vzC47nkG2hK-GSpQtJKHQ~slG6uoqg__',
        'https://s3-alpha-sig.figma.com/img/d712/b94a/0f3c705a168c7a61bdcc46bb8982e19e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D~Dmzy64k7xkRkXrVMbrNWiSCYBl-7p2fUb1yws0BteMrF5HhmSIKBsaALygEEXQq8TlGRhKp3qAQ0RuWbVihsNRNVggwyNc8cgvqwe9leOJPhlpiMxHPThgPfoIvImev63PyA8olB1KQtF0B8RvuUq7FabSo00EugLHUN36dtXvFZHXbAm5eRzaL-i6DKupV43I-8mI11BjggCxXLuKepKMHaxA6xlg36JVpp9kWrXUaDcw2~-jce8VGoUKhVi5abFZ5ywOgIxDAsTfYnFUbjtfBWiT3eRJbjbcyFtIlW2X4r4awZMecB0bls84iNFVNyACNr0482bwx2albgAbcw__',
        'https://s3-alpha-sig.figma.com/img/0f68/3ae1/4ab8a414136ff5309aa90fce411b6961?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e-PgtVkxH~VWHERF-owLSsC09jwWzMlIA83MuTKmxyxS0w6ezHeIHqYwP0n8LqDeteDXcg-h4ZCt1ibsO4wVXYQxboIeWRgDK6YI2NwqLF8UzGHHqJmJmjMs332gN0-RjCeIc01wnO0fQgKQziYRKDtNY4RGZIlEYa3kV03sXdKGBEkm-KsLgnEAwFdcqbTc-m1i-ZxFoVpc3vM9SG6~uo-CWBL5xxyPQme5OqMkmPUw~xvjW620aQaMpiQ-onAwQxeWXRPvPL0c4zXwq3NuTh5Omob8mbOowM9-Enna2-QqUhwuifzMxCsizIY6S-iBu0uVBWfO388p-5Y9ZK0kaw__',
        'https://s3-alpha-sig.figma.com/img/83f4/ec48/7d873296a617b4d39fc01f7c9ddcbd29?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGx4erCpFmIkaqXLFqnMvnl54jReV-tyehFJwSavjGqrYkERFNscy2x3gcjr9KEDreEQuwYv2cIO32XuhAUFwiaP7v3JM4Q4l77ebGYtZXc-R-JUZOwjCLdgO37P3eq6CI2BZuDPvh3A7tU-Qyhb~RJE6MwTxrXDAhmtGrNimqvpk9GBOaIYgMPp1vBpyfbFAvXHltZkCNTqJaNFneeZqmcRlREiK0vr89H2qBjCkjy7lCIZZ2hisObLmWxoXbtpFxgKVhdnStvAT4rfOwUQACLVwvJznf8C4VM0T3mntCfGuw4AA4JTKLauB-ybxfBoqPlFZJli0P4AdNSrZvfhbA__',
      ],
      name: '@name()',
      nickname: '@first()',
      price: '@float(10, 100, 1, 2)',
      rank: '@integer(1,1000)',
      time: '@integer(1,60)',
    },
  ],
  'buyList|5-8': [
    {
      'id|+1': 1,
      'avatar|1': [
        'https://s3-alpha-sig.figma.com/img/cafb/bfb3/79841c5839bda8db1c23698bcd76f327?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SF46PZmcOXvef5BiYwYhlp0CsUwidgIJvZpUnLWXA0-lSf7vnp9UpeveibOim-VTcDMtatfTDn1TiuJyjRGL~GOI9u7o3g-c52-AH89PesnM1yc9d0chyZ2M4qjDXMgXZem4i4zvDfBK35KC2Pv7ns7mdFW3FdIMWS1SSw5BKfXEAZ7LAh3yGyT5bjmbe4KRu~hld6xZbnlhq4kvLPZFlE0Z1OYlezq5sQwUtZOSPVlkdTq9i8ZLqdZBuMwQ8-uVkmBpof~lI04T~JpO~SLrUtlKlSo2pNw1j4dloJCKX1EAiISrYGIO-P9oudzJ1TEP5tiaZwgulMVIPXGHdNB1sw__',
        'https://s3-alpha-sig.figma.com/img/1203/cf03/bb9345489f0ac2959e0b644729346c7e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f3Urah0O5OcOp8mIQ7jtjLD0iMbfAKvbakQ~k2ewyWpvAGRVRekZV-Ma19Jfmf-AKva5owtQkPMUA8tkcgiyJvyhgsYGPORvpOiK0HDBmSOvdaE8vcz06khkz8D-CWeR-ZSFD-hMlFinB5UNTvLr8-NmCAoR9vZUIF2nx-UIm7x~iYAacs75xBR-y9IAD9A2PcZ7cvpuReqiXKUROORXtzup92zy~j0T7K7-5asVlGwmJjqaDu-s8gK0kk6nLRRR-VajI~hYU7WhM2rqAp2HRPly2uXBNO15cOqp0qg9QUikLe3~FYl7UPO7vzC47nkG2hK-GSpQtJKHQ~slG6uoqg__',
        'https://s3-alpha-sig.figma.com/img/d712/b94a/0f3c705a168c7a61bdcc46bb8982e19e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D~Dmzy64k7xkRkXrVMbrNWiSCYBl-7p2fUb1yws0BteMrF5HhmSIKBsaALygEEXQq8TlGRhKp3qAQ0RuWbVihsNRNVggwyNc8cgvqwe9leOJPhlpiMxHPThgPfoIvImev63PyA8olB1KQtF0B8RvuUq7FabSo00EugLHUN36dtXvFZHXbAm5eRzaL-i6DKupV43I-8mI11BjggCxXLuKepKMHaxA6xlg36JVpp9kWrXUaDcw2~-jce8VGoUKhVi5abFZ5ywOgIxDAsTfYnFUbjtfBWiT3eRJbjbcyFtIlW2X4r4awZMecB0bls84iNFVNyACNr0482bwx2albgAbcw__',
        'https://s3-alpha-sig.figma.com/img/0f68/3ae1/4ab8a414136ff5309aa90fce411b6961?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e-PgtVkxH~VWHERF-owLSsC09jwWzMlIA83MuTKmxyxS0w6ezHeIHqYwP0n8LqDeteDXcg-h4ZCt1ibsO4wVXYQxboIeWRgDK6YI2NwqLF8UzGHHqJmJmjMs332gN0-RjCeIc01wnO0fQgKQziYRKDtNY4RGZIlEYa3kV03sXdKGBEkm-KsLgnEAwFdcqbTc-m1i-ZxFoVpc3vM9SG6~uo-CWBL5xxyPQme5OqMkmPUw~xvjW620aQaMpiQ-onAwQxeWXRPvPL0c4zXwq3NuTh5Omob8mbOowM9-Enna2-QqUhwuifzMxCsizIY6S-iBu0uVBWfO388p-5Y9ZK0kaw__',
        'https://s3-alpha-sig.figma.com/img/83f4/ec48/7d873296a617b4d39fc01f7c9ddcbd29?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGx4erCpFmIkaqXLFqnMvnl54jReV-tyehFJwSavjGqrYkERFNscy2x3gcjr9KEDreEQuwYv2cIO32XuhAUFwiaP7v3JM4Q4l77ebGYtZXc-R-JUZOwjCLdgO37P3eq6CI2BZuDPvh3A7tU-Qyhb~RJE6MwTxrXDAhmtGrNimqvpk9GBOaIYgMPp1vBpyfbFAvXHltZkCNTqJaNFneeZqmcRlREiK0vr89H2qBjCkjy7lCIZZ2hisObLmWxoXbtpFxgKVhdnStvAT4rfOwUQACLVwvJznf8C4VM0T3mntCfGuw4AA4JTKLauB-ybxfBoqPlFZJli0P4AdNSrZvfhbA__',
      ],
      'avatar1|1': [
        'https://s3-alpha-sig.figma.com/img/cafb/bfb3/79841c5839bda8db1c23698bcd76f327?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SF46PZmcOXvef5BiYwYhlp0CsUwidgIJvZpUnLWXA0-lSf7vnp9UpeveibOim-VTcDMtatfTDn1TiuJyjRGL~GOI9u7o3g-c52-AH89PesnM1yc9d0chyZ2M4qjDXMgXZem4i4zvDfBK35KC2Pv7ns7mdFW3FdIMWS1SSw5BKfXEAZ7LAh3yGyT5bjmbe4KRu~hld6xZbnlhq4kvLPZFlE0Z1OYlezq5sQwUtZOSPVlkdTq9i8ZLqdZBuMwQ8-uVkmBpof~lI04T~JpO~SLrUtlKlSo2pNw1j4dloJCKX1EAiISrYGIO-P9oudzJ1TEP5tiaZwgulMVIPXGHdNB1sw__',
        'https://s3-alpha-sig.figma.com/img/1203/cf03/bb9345489f0ac2959e0b644729346c7e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f3Urah0O5OcOp8mIQ7jtjLD0iMbfAKvbakQ~k2ewyWpvAGRVRekZV-Ma19Jfmf-AKva5owtQkPMUA8tkcgiyJvyhgsYGPORvpOiK0HDBmSOvdaE8vcz06khkz8D-CWeR-ZSFD-hMlFinB5UNTvLr8-NmCAoR9vZUIF2nx-UIm7x~iYAacs75xBR-y9IAD9A2PcZ7cvpuReqiXKUROORXtzup92zy~j0T7K7-5asVlGwmJjqaDu-s8gK0kk6nLRRR-VajI~hYU7WhM2rqAp2HRPly2uXBNO15cOqp0qg9QUikLe3~FYl7UPO7vzC47nkG2hK-GSpQtJKHQ~slG6uoqg__',
        'https://s3-alpha-sig.figma.com/img/d712/b94a/0f3c705a168c7a61bdcc46bb8982e19e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D~Dmzy64k7xkRkXrVMbrNWiSCYBl-7p2fUb1yws0BteMrF5HhmSIKBsaALygEEXQq8TlGRhKp3qAQ0RuWbVihsNRNVggwyNc8cgvqwe9leOJPhlpiMxHPThgPfoIvImev63PyA8olB1KQtF0B8RvuUq7FabSo00EugLHUN36dtXvFZHXbAm5eRzaL-i6DKupV43I-8mI11BjggCxXLuKepKMHaxA6xlg36JVpp9kWrXUaDcw2~-jce8VGoUKhVi5abFZ5ywOgIxDAsTfYnFUbjtfBWiT3eRJbjbcyFtIlW2X4r4awZMecB0bls84iNFVNyACNr0482bwx2albgAbcw__',
        'https://s3-alpha-sig.figma.com/img/0f68/3ae1/4ab8a414136ff5309aa90fce411b6961?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e-PgtVkxH~VWHERF-owLSsC09jwWzMlIA83MuTKmxyxS0w6ezHeIHqYwP0n8LqDeteDXcg-h4ZCt1ibsO4wVXYQxboIeWRgDK6YI2NwqLF8UzGHHqJmJmjMs332gN0-RjCeIc01wnO0fQgKQziYRKDtNY4RGZIlEYa3kV03sXdKGBEkm-KsLgnEAwFdcqbTc-m1i-ZxFoVpc3vM9SG6~uo-CWBL5xxyPQme5OqMkmPUw~xvjW620aQaMpiQ-onAwQxeWXRPvPL0c4zXwq3NuTh5Omob8mbOowM9-Enna2-QqUhwuifzMxCsizIY6S-iBu0uVBWfO388p-5Y9ZK0kaw__',
        'https://s3-alpha-sig.figma.com/img/83f4/ec48/7d873296a617b4d39fc01f7c9ddcbd29?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGx4erCpFmIkaqXLFqnMvnl54jReV-tyehFJwSavjGqrYkERFNscy2x3gcjr9KEDreEQuwYv2cIO32XuhAUFwiaP7v3JM4Q4l77ebGYtZXc-R-JUZOwjCLdgO37P3eq6CI2BZuDPvh3A7tU-Qyhb~RJE6MwTxrXDAhmtGrNimqvpk9GBOaIYgMPp1vBpyfbFAvXHltZkCNTqJaNFneeZqmcRlREiK0vr89H2qBjCkjy7lCIZZ2hisObLmWxoXbtpFxgKVhdnStvAT4rfOwUQACLVwvJznf8C4VM0T3mntCfGuw4AA4JTKLauB-ybxfBoqPlFZJli0P4AdNSrZvfhbA__',
      ],
      nickname: '@first()',
      nickname1: '@first()',
      share: '@integer(-10,10)',
      price: '@float(-5, 5, 2, 4)',
      time: '@datetime(yyyy/MM/dd HH:mm)',
    },
  ],
});

const topList = [
  {
    id: 6,
    avatar:
      'https://s3-alpha-sig.figma.com/img/cafb/bfb3/79841c5839bda8db1c23698bcd76f327?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SF46PZmcOXvef5BiYwYhlp0CsUwidgIJvZpUnLWXA0-lSf7vnp9UpeveibOim-VTcDMtatfTDn1TiuJyjRGL~GOI9u7o3g-c52-AH89PesnM1yc9d0chyZ2M4qjDXMgXZem4i4zvDfBK35KC2Pv7ns7mdFW3FdIMWS1SSw5BKfXEAZ7LAh3yGyT5bjmbe4KRu~hld6xZbnlhq4kvLPZFlE0Z1OYlezq5sQwUtZOSPVlkdTq9i8ZLqdZBuMwQ8-uVkmBpof~lI04T~JpO~SLrUtlKlSo2pNw1j4dloJCKX1EAiISrYGIO-P9oudzJ1TEP5tiaZwgulMVIPXGHdNB1sw__',
    name: 'Brenda Johnson',
    nickname: 'Robert',
    price: 14.86,
    rank: 96,
    time: 56,
    top: 12.3,
  },
  {
    id: 1,
    avatar:
      'https://s3-alpha-sig.figma.com/img/b0e6/1e6e/9e0b10bc7df7f8b016a4a4b14a72390c?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbzfTy62BKZoEECa3NIt1~o1YdznKeE79nKfwJ2eLXuw2csMXa8DSL~AjX2hqfXcV5CaSKQgqPk0nBDdaH1QMzoyApx~2GZyLzYidWjfL~4mAjmWIyAls4NVpTdwgcLmlzONayjLLIiUCmZPGSCLRRr2uGxX1vFBf0A27xQPXL-6Em0g~ufRsv0YMPtBaOTxGxRI35ifobRhI2H7BK3fPHbXojr4L9OMRT3OAoG9FEAVYD0ik7uLeJO5FYCeFS2jb3Yswp6VoYiPKY8EbVSYEQPK-bzVvDzkS6r-lb6vEQq5TOnuvvcDVUncy3wAUSwSXj1fQA15XJhcVVA5qban9w__',
    name: 'Laura Lewis',
    nickname: 'Mark',
    price: 48.1,
    rank: 572,
    time: 49,
    top: 20.33,
  },
  {
    id: 4,
    avatar:
      'https://s3-alpha-sig.figma.com/img/1203/cf03/bb9345489f0ac2959e0b644729346c7e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f3Urah0O5OcOp8mIQ7jtjLD0iMbfAKvbakQ~k2ewyWpvAGRVRekZV-Ma19Jfmf-AKva5owtQkPMUA8tkcgiyJvyhgsYGPORvpOiK0HDBmSOvdaE8vcz06khkz8D-CWeR-ZSFD-hMlFinB5UNTvLr8-NmCAoR9vZUIF2nx-UIm7x~iYAacs75xBR-y9IAD9A2PcZ7cvpuReqiXKUROORXtzup92zy~j0T7K7-5asVlGwmJjqaDu-s8gK0kk6nLRRR-VajI~hYU7WhM2rqAp2HRPly2uXBNO15cOqp0qg9QUikLe3~FYl7UPO7vzC47nkG2hK-GSpQtJKHQ~slG6uoqg__',
    name: 'Steven Garcia',
    nickname: 'Joseph',
    price: 39.35,
    rank: 857,
    time: 24,
    top: 12.5,
  },
  {
    id: 2,
    avatar:
      'https://s3-alpha-sig.figma.com/img/d712/b94a/0f3c705a168c7a61bdcc46bb8982e19e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D~Dmzy64k7xkRkXrVMbrNWiSCYBl-7p2fUb1yws0BteMrF5HhmSIKBsaALygEEXQq8TlGRhKp3qAQ0RuWbVihsNRNVggwyNc8cgvqwe9leOJPhlpiMxHPThgPfoIvImev63PyA8olB1KQtF0B8RvuUq7FabSo00EugLHUN36dtXvFZHXbAm5eRzaL-i6DKupV43I-8mI11BjggCxXLuKepKMHaxA6xlg36JVpp9kWrXUaDcw2~-jce8VGoUKhVi5abFZ5ywOgIxDAsTfYnFUbjtfBWiT3eRJbjbcyFtIlW2X4r4awZMecB0bls84iNFVNyACNr0482bwx2albgAbcw__',
    name: 'Shirley Moore',
    nickname: 'Linda',
    price: 61.2,
    rank: 565,
    time: 20,
    top: 45.2,
  },
  {
    id: 8,
    avatar:
      'https://s3-alpha-sig.figma.com/img/0f68/3ae1/4ab8a414136ff5309aa90fce411b6961?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e-PgtVkxH~VWHERF-owLSsC09jwWzMlIA83MuTKmxyxS0w6ezHeIHqYwP0n8LqDeteDXcg-h4ZCt1ibsO4wVXYQxboIeWRgDK6YI2NwqLF8UzGHHqJmJmjMs332gN0-RjCeIc01wnO0fQgKQziYRKDtNY4RGZIlEYa3kV03sXdKGBEkm-KsLgnEAwFdcqbTc-m1i-ZxFoVpc3vM9SG6~uo-CWBL5xxyPQme5OqMkmPUw~xvjW620aQaMpiQ-onAwQxeWXRPvPL0c4zXwq3NuTh5Omob8mbOowM9-Enna2-QqUhwuifzMxCsizIY6S-iBu0uVBWfO388p-5Y9ZK0kaw__',
    name: 'Patricia Smith',
    nickname: 'Eric',
    price: 91.62,
    rank: 37,
    time: 13,
    top: 5.27,
  },
  {
    id: 5,
    avatar:
      'https://s3-alpha-sig.figma.com/img/83f4/ec48/7d873296a617b4d39fc01f7c9ddcbd29?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGx4erCpFmIkaqXLFqnMvnl54jReV-tyehFJwSavjGqrYkERFNscy2x3gcjr9KEDreEQuwYv2cIO32XuhAUFwiaP7v3JM4Q4l77ebGYtZXc-R-JUZOwjCLdgO37P3eq6CI2BZuDPvh3A7tU-Qyhb~RJE6MwTxrXDAhmtGrNimqvpk9GBOaIYgMPp1vBpyfbFAvXHltZkCNTqJaNFneeZqmcRlREiK0vr89H2qBjCkjy7lCIZZ2hisObLmWxoXbtpFxgKVhdnStvAT4rfOwUQACLVwvJznf8C4VM0T3mntCfGuw4AA4JTKLauB-ybxfBoqPlFZJli0P4AdNSrZvfhbA__',
    name: 'Betty Moore',
    nickname: 'John',
    price: 60.42,
    rank: 960,
    time: 11,
    top: 6.12,
  },
  {
    id: 3,
    avatar:
      'https://s3-alpha-sig.figma.com/img/d138/c800/8678b73810e3250021201b1c109dfd71?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KAiCxViyXH7UUK4nq9b3tvu~le9zNjifxLhNYf1PEOnPbRqJo9oj7pv-9Ym7wqhIhpj48-5EPgUEPLezsWRSjvr41-GJlySWDh8T9ucGWGu1tdnLM3Jn~LbBaWku0fLvrVylnEQqu4Bl~o9ov~JuITBiW35fbYrF96llcW3XLOzNcdyzNIBQDioT1T0CZi-s6lYBjnP35QXal4EtVLw5hY2qDd~Dfg7P-l56uuvNDS~8IsBdZKkSrQA1vqbOqzls7j3AJL9enL3vXsmON4Nzp3caBPUIuADcnldntqf-f2eU3HVwuPshLK82UBzE97BJFU9Y8n2tyoU6TH7WXxbwSg__',
    name: 'Brenda Wilson',
    nickname: 'Patricia',
    price: 55.08,
    rank: 975,
    time: 9,
    top: 27.3,
  },
  {
    id: 7,
    avatar:
      'https://s3-alpha-sig.figma.com/img/5884/a9a3/850993a22ae68a1d928237508e713a95?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T9lsT36Y6ti1wCGtYr6VAfuk0ThZ7zfLtIfDr75p2Ub0-1iUrD0mrbgjWIwnfmtfh06F8OuNjfd-NJzXTrKuwYqkOhcCQie5y4mchDi1rf4l9F55ETTo7ybPESnOV17zRxKa9GCh6Sre8W5vu4-YZZwupSiOvT9A7Fi-g6WJjSVQgRkPyvBG~xvFGn6ssDX6Ez0mG4pB9sOt~uy~1r5T6SOLrnVKBz3Qv1a9dt5aUyCHjHZ~wFyn4NAYWwfybQQ5fY51cOwmg6X6YnglsE0JnwsFY08fma2IUkLVLYpIMIUBqbwMhAip73a0GG9TL0wlNozEE5mYKteeC2W95RPxHQ__',
    name: 'William Miller',
    nickname: 'Brian',
    price: 25.9,
    rank: 160,
    time: 9,
    top: 2.54,
  },
];

const activites = [
  {
    id: 7,
    avatar:
      'https://s3-alpha-sig.figma.com/img/5884/a9a3/850993a22ae68a1d928237508e713a95?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T9lsT36Y6ti1wCGtYr6VAfuk0ThZ7zfLtIfDr75p2Ub0-1iUrD0mrbgjWIwnfmtfh06F8OuNjfd-NJzXTrKuwYqkOhcCQie5y4mchDi1rf4l9F55ETTo7ybPESnOV17zRxKa9GCh6Sre8W5vu4-YZZwupSiOvT9A7Fi-g6WJjSVQgRkPyvBG~xvFGn6ssDX6Ez0mG4pB9sOt~uy~1r5T6SOLrnVKBz3Qv1a9dt5aUyCHjHZ~wFyn4NAYWwfybQQ5fY51cOwmg6X6YnglsE0JnwsFY08fma2IUkLVLYpIMIUBqbwMhAip73a0GG9TL0wlNozEE5mYKteeC2W95RPxHQ__',
    name: 'William Miller',
    nickname: 'Brian',
    type: 'Bought',
    share: '+4',
    price: '-2.883',
    avatar1:
      'https://s3-alpha-sig.figma.com/img/d138/c800/8678b73810e3250021201b1c109dfd71?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KAiCxViyXH7UUK4nq9b3tvu~le9zNjifxLhNYf1PEOnPbRqJo9oj7pv-9Ym7wqhIhpj48-5EPgUEPLezsWRSjvr41-GJlySWDh8T9ucGWGu1tdnLM3Jn~LbBaWku0fLvrVylnEQqu4Bl~o9ov~JuITBiW35fbYrF96llcW3XLOzNcdyzNIBQDioT1T0CZi-s6lYBjnP35QXal4EtVLw5hY2qDd~Dfg7P-l56uuvNDS~8IsBdZKkSrQA1vqbOqzls7j3AJL9enL3vXsmON4Nzp3caBPUIuADcnldntqf-f2eU3HVwuPshLK82UBzE97BJFU9Y8n2tyoU6TH7WXxbwSg__',
    nickname1: 'Patricia',
    time: '2024/02/10  11:14',
  },
  {
    id: 8,
    avatar:
      'https://s3-alpha-sig.figma.com/img/5884/a9a3/850993a22ae68a1d928237508e713a95?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T9lsT36Y6ti1wCGtYr6VAfuk0ThZ7zfLtIfDr75p2Ub0-1iUrD0mrbgjWIwnfmtfh06F8OuNjfd-NJzXTrKuwYqkOhcCQie5y4mchDi1rf4l9F55ETTo7ybPESnOV17zRxKa9GCh6Sre8W5vu4-YZZwupSiOvT9A7Fi-g6WJjSVQgRkPyvBG~xvFGn6ssDX6Ez0mG4pB9sOt~uy~1r5T6SOLrnVKBz3Qv1a9dt5aUyCHjHZ~wFyn4NAYWwfybQQ5fY51cOwmg6X6YnglsE0JnwsFY08fma2IUkLVLYpIMIUBqbwMhAip73a0GG9TL0wlNozEE5mYKteeC2W95RPxHQ__',
    name: 'Patricia Smith',
    nickname: 'Robert',
    avatar1:
      'https://s3-alpha-sig.figma.com/img/0f68/3ae1/4ab8a414136ff5309aa90fce411b6961?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e-PgtVkxH~VWHERF-owLSsC09jwWzMlIA83MuTKmxyxS0w6ezHeIHqYwP0n8LqDeteDXcg-h4ZCt1ibsO4wVXYQxboIeWRgDK6YI2NwqLF8UzGHHqJmJmjMs332gN0-RjCeIc01wnO0fQgKQziYRKDtNY4RGZIlEYa3kV03sXdKGBEkm-KsLgnEAwFdcqbTc-m1i-ZxFoVpc3vM9SG6~uo-CWBL5xxyPQme5OqMkmPUw~xvjW620aQaMpiQ-onAwQxeWXRPvPL0c4zXwq3NuTh5Omob8mbOowM9-Enna2-QqUhwuifzMxCsizIY6S-iBu0uVBWfO388p-5Y9ZK0kaw__',
    nickname1: 'Eric',
    type: 'Sold',
    share: '-8',
    price: '+0.52',
    time: '2024/01/15  15:24',
  },
  {
    id: 1,
    avatar:
      'https://s3-alpha-sig.figma.com/img/1203/cf03/bb9345489f0ac2959e0b644729346c7e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f3Urah0O5OcOp8mIQ7jtjLD0iMbfAKvbakQ~k2ewyWpvAGRVRekZV-Ma19Jfmf-AKva5owtQkPMUA8tkcgiyJvyhgsYGPORvpOiK0HDBmSOvdaE8vcz06khkz8D-CWeR-ZSFD-hMlFinB5UNTvLr8-NmCAoR9vZUIF2nx-UIm7x~iYAacs75xBR-y9IAD9A2PcZ7cvpuReqiXKUROORXtzup92zy~j0T7K7-5asVlGwmJjqaDu-s8gK0kk6nLRRR-VajI~hYU7WhM2rqAp2HRPly2uXBNO15cOqp0qg9QUikLe3~FYl7UPO7vzC47nkG2hK-GSpQtJKHQ~slG6uoqg__',
    name: 'Patricia Smith',
    nickname: 'John',
    avatar1:
      'https://s3-alpha-sig.figma.com/img/83f4/ec48/7d873296a617b4d39fc01f7c9ddcbd29?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGx4erCpFmIkaqXLFqnMvnl54jReV-tyehFJwSavjGqrYkERFNscy2x3gcjr9KEDreEQuwYv2cIO32XuhAUFwiaP7v3JM4Q4l77ebGYtZXc-R-JUZOwjCLdgO37P3eq6CI2BZuDPvh3A7tU-Qyhb~RJE6MwTxrXDAhmtGrNimqvpk9GBOaIYgMPp1vBpyfbFAvXHltZkCNTqJaNFneeZqmcRlREiK0vr89H2qBjCkjy7lCIZZ2hisObLmWxoXbtpFxgKVhdnStvAT4rfOwUQACLVwvJznf8C4VM0T3mntCfGuw4AA4JTKLauB-ybxfBoqPlFZJli0P4AdNSrZvfhbA__',
    nickname1: 'Linda',
    type: 'Sold',
    share: '-3',
    price: '+0.43',
    time: '2024/01/08  20:52',
  },
];

const reward = [
  {
    id: 6,
    avatar:
      'https://s3-alpha-sig.figma.com/img/cafb/bfb3/79841c5839bda8db1c23698bcd76f327?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SF46PZmcOXvef5BiYwYhlp0CsUwidgIJvZpUnLWXA0-lSf7vnp9UpeveibOim-VTcDMtatfTDn1TiuJyjRGL~GOI9u7o3g-c52-AH89PesnM1yc9d0chyZ2M4qjDXMgXZem4i4zvDfBK35KC2Pv7ns7mdFW3FdIMWS1SSw5BKfXEAZ7LAh3yGyT5bjmbe4KRu~hld6xZbnlhq4kvLPZFlE0Z1OYlezq5sQwUtZOSPVlkdTq9i8ZLqdZBuMwQ8-uVkmBpof~lI04T~JpO~SLrUtlKlSo2pNw1j4dloJCKX1EAiISrYGIO-P9oudzJ1TEP5tiaZwgulMVIPXGHdNB1sw__',
    name: 'Brenda Johnson',
    nickname: 'Robert',
    time: 'Jan 05 2023, 14:32',
    text: 'History is always extremely similar bitcoin is the invention of satoshi nakamoto, Chinese people early to give him dry up ethereum is v god made',
    rank: 21,
  },
  {
    id: 1,
    avatar:
      'https://s3-alpha-sig.figma.com/img/b0e6/1e6e/9e0b10bc7df7f8b016a4a4b14a72390c?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QbzfTy62BKZoEECa3NIt1~o1YdznKeE79nKfwJ2eLXuw2csMXa8DSL~AjX2hqfXcV5CaSKQgqPk0nBDdaH1QMzoyApx~2GZyLzYidWjfL~4mAjmWIyAls4NVpTdwgcLmlzONayjLLIiUCmZPGSCLRRr2uGxX1vFBf0A27xQPXL-6Em0g~ufRsv0YMPtBaOTxGxRI35ifobRhI2H7BK3fPHbXojr4L9OMRT3OAoG9FEAVYD0ik7uLeJO5FYCeFS2jb3Yswp6VoYiPKY8EbVSYEQPK-bzVvDzkS6r-lb6vEQq5TOnuvvcDVUncy3wAUSwSXj1fQA15XJhcVVA5qban9w__',
    name: 'Laura Lewis',
    nickname: 'Mark',
    time: 'Dec 03 2023, 15:26',
    text: 'Zen is process of "Decentring", it\'s a practice to retrospect the relationship btwn self and any man-made imaginary belief constructs: love, marriage, status, nation state and race, token is just a subset of this',
    rank: 192,
  },
  {
    id: 4,
    avatar:
      'https://s3-alpha-sig.figma.com/img/1203/cf03/bb9345489f0ac2959e0b644729346c7e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f3Urah0O5OcOp8mIQ7jtjLD0iMbfAKvbakQ~k2ewyWpvAGRVRekZV-Ma19Jfmf-AKva5owtQkPMUA8tkcgiyJvyhgsYGPORvpOiK0HDBmSOvdaE8vcz06khkz8D-CWeR-ZSFD-hMlFinB5UNTvLr8-NmCAoR9vZUIF2nx-UIm7x~iYAacs75xBR-y9IAD9A2PcZ7cvpuReqiXKUROORXtzup92zy~j0T7K7-5asVlGwmJjqaDu-s8gK0kk6nLRRR-VajI~hYU7WhM2rqAp2HRPly2uXBNO15cOqp0qg9QUikLe3~FYl7UPO7vzC47nkG2hK-GSpQtJKHQ~slG6uoqg__',
    name: 'Steven Garcia',
    nickname: 'Joseph',
    time: 'Apr 09 2023, 14:18',
    text: 'If Victor Orban continues to be so remarkably based I’m going to invest 100,000,000 dollars into Hungary just out of respect.',
    rank: 239,
  },
  {
    id: 2,
    avatar:
      'https://s3-alpha-sig.figma.com/img/d712/b94a/0f3c705a168c7a61bdcc46bb8982e19e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D~Dmzy64k7xkRkXrVMbrNWiSCYBl-7p2fUb1yws0BteMrF5HhmSIKBsaALygEEXQq8TlGRhKp3qAQ0RuWbVihsNRNVggwyNc8cgvqwe9leOJPhlpiMxHPThgPfoIvImev63PyA8olB1KQtF0B8RvuUq7FabSo00EugLHUN36dtXvFZHXbAm5eRzaL-i6DKupV43I-8mI11BjggCxXLuKepKMHaxA6xlg36JVpp9kWrXUaDcw2~-jce8VGoUKhVi5abFZ5ywOgIxDAsTfYnFUbjtfBWiT3eRJbjbcyFtIlW2X4r4awZMecB0bls84iNFVNyACNr0482bwx2albgAbcw__',
    name: 'Shirley Moore',
    nickname: 'Linda',
    time: 'Apr 16 2023, 20:12',
    text: 'Describe this young man in one word... 🌟',
    rank: 534,
  },
  {
    id: 8,
    avatar:
      'https://s3-alpha-sig.figma.com/img/0f68/3ae1/4ab8a414136ff5309aa90fce411b6961?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e-PgtVkxH~VWHERF-owLSsC09jwWzMlIA83MuTKmxyxS0w6ezHeIHqYwP0n8LqDeteDXcg-h4ZCt1ibsO4wVXYQxboIeWRgDK6YI2NwqLF8UzGHHqJmJmjMs332gN0-RjCeIc01wnO0fQgKQziYRKDtNY4RGZIlEYa3kV03sXdKGBEkm-KsLgnEAwFdcqbTc-m1i-ZxFoVpc3vM9SG6~uo-CWBL5xxyPQme5OqMkmPUw~xvjW620aQaMpiQ-onAwQxeWXRPvPL0c4zXwq3NuTh5Omob8mbOowM9-Enna2-QqUhwuifzMxCsizIY6S-iBu0uVBWfO388p-5Y9ZK0kaw__',
    name: 'Patricia Smith',
    nickname: 'Eric',
    time: 'Jun 07 2023, 21:08',
    text: 'Nigeria are into the AFCON semi-finals 🇳🇬 Congratulations to Frank Onyeka, Calvin Bassey, Ola Aina and Alex Iwobi 👏',
    rank: 623,
  },
];

export { activites, reward, topList };

export default mockData;
