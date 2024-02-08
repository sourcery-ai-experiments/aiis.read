import Mock from 'mockjs';

const mockData = Mock.mock({
  'topList|5-8': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'avatar|1': [
        'https://s3-alpha-sig.figma.com/img/cafb/bfb3/79841c5839bda8db1c23698bcd76f327?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pwaIJresrWgX-PU3bOfZD5LNUst8YKfkjlbd8CYq03uFNfNRtYSN4LrOr1TCjyMQneQ7oWOkJQcmZrdNLw6aEA4W82OZPqoDtF7d3HGrtE1cWB2cQK40QqjF-YFXZTPjh~am5ZH7mQ66~rG5covo4GDeEp4TkcugBhRmej3lDmzrbRoc5ZVGdavFNoyzOFN2RwDjPh6FDweDTzgBTrBLF2EZkYfXCgptb14RZwOWHTN7WLaLKnuiSs4J28kBpUuzoL3MrGUZwaKCrVkHDpLtAKTxZ~Jv5nx0zBaoT0IHdSkQIdDVm9I-Sva-7h9gZMBdN5q2MieoUEu0usLASMSgIw__',
        'https://s3-alpha-sig.figma.com/img/1203/cf03/bb9345489f0ac2959e0b644729346c7e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QsTTmZc0rLNJgBCpuHWLL5loeEOW6QmPzmNTyrl4bSellvqIS1ieS8bF5kVdkTSeFIi7g1n4rt5WO9xoPLawO71FBgjEbc368XmOSf4jkv3~46VYjLGBvoS3q2~VFMqmU-dK5bVBFk0Y8ayggsqIC4o90qCslk8nfmG2sggPPaeqfDM3fmTFd3sehCELMUEQIBooyeIsUJmU6kxGM-53QxtMrLYJQp774tDSGA9W4rQVtztpPWWqLOOtuXN4lZZMezMcP2WQZyJMOb2zdCY5VoNen6dUeXLqK9~JrfWP8DEqEbGSqbv86QQ1NR8SF-HZ-07kzznXDMP-Th47PJSaQw__',
        'https://s3-alpha-sig.figma.com/img/d712/b94a/0f3c705a168c7a61bdcc46bb8982e19e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LltFuhXlBH1-A7lCckFbTpCGJHH-3f7vPw6ftASlu7cTJIdTbUUDLuKVbRKZm8lun6hNnKCc9J3LjrONBa~mUUQUzbJfDhrOZ0FE5~0~o2rcRX9ALCfR44K8H3BOzGCfoRHEdAYnR0aFPWfNcocsI6C0zHmrsmatwooKyF3fmbVtxHRVe3kKwHUX3OOBIdzY9fYOp0y0KVD73P0wNkmeOwEB-Af31JgSHyAZTCcvfONmwNCJKeXwEJDwY~sT9N8uKNOQgLQ2KA42m6PK79-FOXEwbDAtxx4akM~uPkl-xOQeIyeZZUxAtRCdqVvFskGpfL6GTOwM7YkEjT5e2TNCGQ__',
        'https://s3-alpha-sig.figma.com/img/0f68/3ae1/4ab8a414136ff5309aa90fce411b6961?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4zCtFmv0fiKRy1eD5~KtUJtyMMPY3KXydDxoe8jWJNN2V6tq1WDqUEvzwyiqW3~ixWv~tcoT3NWC3THoBYywjfv5NPYqarNyPGLmsajnMc-PdMc5IqFU8vAIrmmE2qXtY1ypEoIIcDo3G-IKKFilCN4M45XdYd6SGsnYTrqs-zVbb7K8cASTy-cwQK~eXjY7SSoGkT5EY1wF4XR7KXQzxn7zAI0pGRk46j75-yloV0oGlU3Z3uOnfF0Ol1DzvJKMZ-Lp-j2hOTwCDkCOZG5Ue-X1oviqzH~00fuDVD1QeToOhqBolzZ-BqyDz2BC-yBP2mvvcXtAE4sSQnY5ff3EA__',
        'https://s3-alpha-sig.figma.com/img/83f4/ec48/7d873296a617b4d39fc01f7c9ddcbd29?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPvVQvAOT5v9hZx8vs45fFUAtuYk1UHxskcV0gW4wLB35JGLX~naaPt2yn5KpPPtFur23Wp6xjFZL18FfDcUHWlHAswgYeg4k2-WL-KCqFoZfDe-6V6QBa3iEz2PNwuZLrFCjd7EUG~gR6nU2C~9YW2kMJ8qQQFfn5~UIClh2eY01mRDxn4kkmXxHEk-qAeTrVS9rw4lhh9AVqLkdSiPQsNpVI-~zEHAQgym5IG5wWyvEV2mVw5eKGII6MVBHZ8smS8Cv~jACa~z3ahc7TIZISzcc5P~HWYksUYa6BWQzc5j0uFvmCjO1VglzChRSKezabiCED2M1KPJaZvGMD3~UA__',
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
        'https://s3-alpha-sig.figma.com/img/cafb/bfb3/79841c5839bda8db1c23698bcd76f327?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pwaIJresrWgX-PU3bOfZD5LNUst8YKfkjlbd8CYq03uFNfNRtYSN4LrOr1TCjyMQneQ7oWOkJQcmZrdNLw6aEA4W82OZPqoDtF7d3HGrtE1cWB2cQK40QqjF-YFXZTPjh~am5ZH7mQ66~rG5covo4GDeEp4TkcugBhRmej3lDmzrbRoc5ZVGdavFNoyzOFN2RwDjPh6FDweDTzgBTrBLF2EZkYfXCgptb14RZwOWHTN7WLaLKnuiSs4J28kBpUuzoL3MrGUZwaKCrVkHDpLtAKTxZ~Jv5nx0zBaoT0IHdSkQIdDVm9I-Sva-7h9gZMBdN5q2MieoUEu0usLASMSgIw__',
        'https://s3-alpha-sig.figma.com/img/1203/cf03/bb9345489f0ac2959e0b644729346c7e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QsTTmZc0rLNJgBCpuHWLL5loeEOW6QmPzmNTyrl4bSellvqIS1ieS8bF5kVdkTSeFIi7g1n4rt5WO9xoPLawO71FBgjEbc368XmOSf4jkv3~46VYjLGBvoS3q2~VFMqmU-dK5bVBFk0Y8ayggsqIC4o90qCslk8nfmG2sggPPaeqfDM3fmTFd3sehCELMUEQIBooyeIsUJmU6kxGM-53QxtMrLYJQp774tDSGA9W4rQVtztpPWWqLOOtuXN4lZZMezMcP2WQZyJMOb2zdCY5VoNen6dUeXLqK9~JrfWP8DEqEbGSqbv86QQ1NR8SF-HZ-07kzznXDMP-Th47PJSaQw__',
        'https://s3-alpha-sig.figma.com/img/d712/b94a/0f3c705a168c7a61bdcc46bb8982e19e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LltFuhXlBH1-A7lCckFbTpCGJHH-3f7vPw6ftASlu7cTJIdTbUUDLuKVbRKZm8lun6hNnKCc9J3LjrONBa~mUUQUzbJfDhrOZ0FE5~0~o2rcRX9ALCfR44K8H3BOzGCfoRHEdAYnR0aFPWfNcocsI6C0zHmrsmatwooKyF3fmbVtxHRVe3kKwHUX3OOBIdzY9fYOp0y0KVD73P0wNkmeOwEB-Af31JgSHyAZTCcvfONmwNCJKeXwEJDwY~sT9N8uKNOQgLQ2KA42m6PK79-FOXEwbDAtxx4akM~uPkl-xOQeIyeZZUxAtRCdqVvFskGpfL6GTOwM7YkEjT5e2TNCGQ__',
        'https://s3-alpha-sig.figma.com/img/0f68/3ae1/4ab8a414136ff5309aa90fce411b6961?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4zCtFmv0fiKRy1eD5~KtUJtyMMPY3KXydDxoe8jWJNN2V6tq1WDqUEvzwyiqW3~ixWv~tcoT3NWC3THoBYywjfv5NPYqarNyPGLmsajnMc-PdMc5IqFU8vAIrmmE2qXtY1ypEoIIcDo3G-IKKFilCN4M45XdYd6SGsnYTrqs-zVbb7K8cASTy-cwQK~eXjY7SSoGkT5EY1wF4XR7KXQzxn7zAI0pGRk46j75-yloV0oGlU3Z3uOnfF0Ol1DzvJKMZ-Lp-j2hOTwCDkCOZG5Ue-X1oviqzH~00fuDVD1QeToOhqBolzZ-BqyDz2BC-yBP2mvvcXtAE4sSQnY5ff3EA__',
        'https://s3-alpha-sig.figma.com/img/83f4/ec48/7d873296a617b4d39fc01f7c9ddcbd29?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPvVQvAOT5v9hZx8vs45fFUAtuYk1UHxskcV0gW4wLB35JGLX~naaPt2yn5KpPPtFur23Wp6xjFZL18FfDcUHWlHAswgYeg4k2-WL-KCqFoZfDe-6V6QBa3iEz2PNwuZLrFCjd7EUG~gR6nU2C~9YW2kMJ8qQQFfn5~UIClh2eY01mRDxn4kkmXxHEk-qAeTrVS9rw4lhh9AVqLkdSiPQsNpVI-~zEHAQgym5IG5wWyvEV2mVw5eKGII6MVBHZ8smS8Cv~jACa~z3ahc7TIZISzcc5P~HWYksUYa6BWQzc5j0uFvmCjO1VglzChRSKezabiCED2M1KPJaZvGMD3~UA__',
      ],
      'avatar1|1': [
        'https://s3-alpha-sig.figma.com/img/cafb/bfb3/79841c5839bda8db1c23698bcd76f327?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pwaIJresrWgX-PU3bOfZD5LNUst8YKfkjlbd8CYq03uFNfNRtYSN4LrOr1TCjyMQneQ7oWOkJQcmZrdNLw6aEA4W82OZPqoDtF7d3HGrtE1cWB2cQK40QqjF-YFXZTPjh~am5ZH7mQ66~rG5covo4GDeEp4TkcugBhRmej3lDmzrbRoc5ZVGdavFNoyzOFN2RwDjPh6FDweDTzgBTrBLF2EZkYfXCgptb14RZwOWHTN7WLaLKnuiSs4J28kBpUuzoL3MrGUZwaKCrVkHDpLtAKTxZ~Jv5nx0zBaoT0IHdSkQIdDVm9I-Sva-7h9gZMBdN5q2MieoUEu0usLASMSgIw__',
        'https://s3-alpha-sig.figma.com/img/1203/cf03/bb9345489f0ac2959e0b644729346c7e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QsTTmZc0rLNJgBCpuHWLL5loeEOW6QmPzmNTyrl4bSellvqIS1ieS8bF5kVdkTSeFIi7g1n4rt5WO9xoPLawO71FBgjEbc368XmOSf4jkv3~46VYjLGBvoS3q2~VFMqmU-dK5bVBFk0Y8ayggsqIC4o90qCslk8nfmG2sggPPaeqfDM3fmTFd3sehCELMUEQIBooyeIsUJmU6kxGM-53QxtMrLYJQp774tDSGA9W4rQVtztpPWWqLOOtuXN4lZZMezMcP2WQZyJMOb2zdCY5VoNen6dUeXLqK9~JrfWP8DEqEbGSqbv86QQ1NR8SF-HZ-07kzznXDMP-Th47PJSaQw__',
        'https://s3-alpha-sig.figma.com/img/d712/b94a/0f3c705a168c7a61bdcc46bb8982e19e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LltFuhXlBH1-A7lCckFbTpCGJHH-3f7vPw6ftASlu7cTJIdTbUUDLuKVbRKZm8lun6hNnKCc9J3LjrONBa~mUUQUzbJfDhrOZ0FE5~0~o2rcRX9ALCfR44K8H3BOzGCfoRHEdAYnR0aFPWfNcocsI6C0zHmrsmatwooKyF3fmbVtxHRVe3kKwHUX3OOBIdzY9fYOp0y0KVD73P0wNkmeOwEB-Af31JgSHyAZTCcvfONmwNCJKeXwEJDwY~sT9N8uKNOQgLQ2KA42m6PK79-FOXEwbDAtxx4akM~uPkl-xOQeIyeZZUxAtRCdqVvFskGpfL6GTOwM7YkEjT5e2TNCGQ__',
        'https://s3-alpha-sig.figma.com/img/0f68/3ae1/4ab8a414136ff5309aa90fce411b6961?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4zCtFmv0fiKRy1eD5~KtUJtyMMPY3KXydDxoe8jWJNN2V6tq1WDqUEvzwyiqW3~ixWv~tcoT3NWC3THoBYywjfv5NPYqarNyPGLmsajnMc-PdMc5IqFU8vAIrmmE2qXtY1ypEoIIcDo3G-IKKFilCN4M45XdYd6SGsnYTrqs-zVbb7K8cASTy-cwQK~eXjY7SSoGkT5EY1wF4XR7KXQzxn7zAI0pGRk46j75-yloV0oGlU3Z3uOnfF0Ol1DzvJKMZ-Lp-j2hOTwCDkCOZG5Ue-X1oviqzH~00fuDVD1QeToOhqBolzZ-BqyDz2BC-yBP2mvvcXtAE4sSQnY5ff3EA__',
        'https://s3-alpha-sig.figma.com/img/83f4/ec48/7d873296a617b4d39fc01f7c9ddcbd29?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPvVQvAOT5v9hZx8vs45fFUAtuYk1UHxskcV0gW4wLB35JGLX~naaPt2yn5KpPPtFur23Wp6xjFZL18FfDcUHWlHAswgYeg4k2-WL-KCqFoZfDe-6V6QBa3iEz2PNwuZLrFCjd7EUG~gR6nU2C~9YW2kMJ8qQQFfn5~UIClh2eY01mRDxn4kkmXxHEk-qAeTrVS9rw4lhh9AVqLkdSiPQsNpVI-~zEHAQgym5IG5wWyvEV2mVw5eKGII6MVBHZ8smS8Cv~jACa~z3ahc7TIZISzcc5P~HWYksUYa6BWQzc5j0uFvmCjO1VglzChRSKezabiCED2M1KPJaZvGMD3~UA__',
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
      'https://s3-alpha-sig.figma.com/img/cafb/bfb3/79841c5839bda8db1c23698bcd76f327?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pwaIJresrWgX-PU3bOfZD5LNUst8YKfkjlbd8CYq03uFNfNRtYSN4LrOr1TCjyMQneQ7oWOkJQcmZrdNLw6aEA4W82OZPqoDtF7d3HGrtE1cWB2cQK40QqjF-YFXZTPjh~am5ZH7mQ66~rG5covo4GDeEp4TkcugBhRmej3lDmzrbRoc5ZVGdavFNoyzOFN2RwDjPh6FDweDTzgBTrBLF2EZkYfXCgptb14RZwOWHTN7WLaLKnuiSs4J28kBpUuzoL3MrGUZwaKCrVkHDpLtAKTxZ~Jv5nx0zBaoT0IHdSkQIdDVm9I-Sva-7h9gZMBdN5q2MieoUEu0usLASMSgIw__',
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
      'https://s3-alpha-sig.figma.com/img/b0e6/1e6e/9e0b10bc7df7f8b016a4a4b14a72390c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jnbGI97jQAvsSduElyoEwhWDBy3ytk-UwcwPR4fNFQEGeEQV~28hanQuhf5r6umsnzldxFhwhONJyKMjTNU2r2st4byQ6livJ7w6D6wI6ZbYfm7MZIMfy5JnzMqplGZ5CWHjnzw84MCz8NlIHKnNlWjWKZajIc6izKmEAz9pMrPxCdOSFT~BTODNdLX9X8cQ52IVybWUQyDjieMs3g69nQrGSufNTGiAjlfO6ZOJj1-R5C7zpMmozB5NCDRCpyQjHuwK6bpVYKF3UomzKKTgts6gX1OcJFyLDoqdugwOiVUuz8GBT6AMunwKhFjIYWTewHsEJiM2evEe8ST1BAX5Yw__',
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
      'https://s3-alpha-sig.figma.com/img/1203/cf03/bb9345489f0ac2959e0b644729346c7e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QsTTmZc0rLNJgBCpuHWLL5loeEOW6QmPzmNTyrl4bSellvqIS1ieS8bF5kVdkTSeFIi7g1n4rt5WO9xoPLawO71FBgjEbc368XmOSf4jkv3~46VYjLGBvoS3q2~VFMqmU-dK5bVBFk0Y8ayggsqIC4o90qCslk8nfmG2sggPPaeqfDM3fmTFd3sehCELMUEQIBooyeIsUJmU6kxGM-53QxtMrLYJQp774tDSGA9W4rQVtztpPWWqLOOtuXN4lZZMezMcP2WQZyJMOb2zdCY5VoNen6dUeXLqK9~JrfWP8DEqEbGSqbv86QQ1NR8SF-HZ-07kzznXDMP-Th47PJSaQw__',
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
      'https://s3-alpha-sig.figma.com/img/d712/b94a/0f3c705a168c7a61bdcc46bb8982e19e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LltFuhXlBH1-A7lCckFbTpCGJHH-3f7vPw6ftASlu7cTJIdTbUUDLuKVbRKZm8lun6hNnKCc9J3LjrONBa~mUUQUzbJfDhrOZ0FE5~0~o2rcRX9ALCfR44K8H3BOzGCfoRHEdAYnR0aFPWfNcocsI6C0zHmrsmatwooKyF3fmbVtxHRVe3kKwHUX3OOBIdzY9fYOp0y0KVD73P0wNkmeOwEB-Af31JgSHyAZTCcvfONmwNCJKeXwEJDwY~sT9N8uKNOQgLQ2KA42m6PK79-FOXEwbDAtxx4akM~uPkl-xOQeIyeZZUxAtRCdqVvFskGpfL6GTOwM7YkEjT5e2TNCGQ__',
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
      'https://s3-alpha-sig.figma.com/img/0f68/3ae1/4ab8a414136ff5309aa90fce411b6961?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4zCtFmv0fiKRy1eD5~KtUJtyMMPY3KXydDxoe8jWJNN2V6tq1WDqUEvzwyiqW3~ixWv~tcoT3NWC3THoBYywjfv5NPYqarNyPGLmsajnMc-PdMc5IqFU8vAIrmmE2qXtY1ypEoIIcDo3G-IKKFilCN4M45XdYd6SGsnYTrqs-zVbb7K8cASTy-cwQK~eXjY7SSoGkT5EY1wF4XR7KXQzxn7zAI0pGRk46j75-yloV0oGlU3Z3uOnfF0Ol1DzvJKMZ-Lp-j2hOTwCDkCOZG5Ue-X1oviqzH~00fuDVD1QeToOhqBolzZ-BqyDz2BC-yBP2mvvcXtAE4sSQnY5ff3EA__',
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
      'https://s3-alpha-sig.figma.com/img/83f4/ec48/7d873296a617b4d39fc01f7c9ddcbd29?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPvVQvAOT5v9hZx8vs45fFUAtuYk1UHxskcV0gW4wLB35JGLX~naaPt2yn5KpPPtFur23Wp6xjFZL18FfDcUHWlHAswgYeg4k2-WL-KCqFoZfDe-6V6QBa3iEz2PNwuZLrFCjd7EUG~gR6nU2C~9YW2kMJ8qQQFfn5~UIClh2eY01mRDxn4kkmXxHEk-qAeTrVS9rw4lhh9AVqLkdSiPQsNpVI-~zEHAQgym5IG5wWyvEV2mVw5eKGII6MVBHZ8smS8Cv~jACa~z3ahc7TIZISzcc5P~HWYksUYa6BWQzc5j0uFvmCjO1VglzChRSKezabiCED2M1KPJaZvGMD3~UA__',
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
      'https://s3-alpha-sig.figma.com/img/d138/c800/8678b73810e3250021201b1c109dfd71?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B8kiFsfkEy6OxlDBABAKQ9SbzMCUFr1hJz9YucH2N69g-btcYP97j~lPyoYJC6fVOQGGXyr7G7OFMtS1hozUMvkuEsSvyV9f7ysmt6R4WggMeXVhVaEAvfQRqcOvaLvRvt831tVU-B1YR-7R7upWuuIH3B4iUmz6ot4evXmUEInB-NH~zVmkWl5E~kVKKXcX~uxgD8uV0ayHbjFsoxAlZMWbHuTQ2ai9nbBqTTXZfzlon6kOSIc1WVeKWK8qozVpvkp77GHQ1F3nM1HZbMTJZrNNMy8-G3vEJjQLTWHsNZt-3bUgRR5y4-fcPqkP1NHIZ1ezoko3YGY2HndqnzLMWw__',
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
      'https://s3-alpha-sig.figma.com/img/5884/a9a3/850993a22ae68a1d928237508e713a95?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PUVlmyDBuGd4II7wipQawCSRUyyoxBtJyqdfXBhpYqcPag4kTlvgyDWZ-2IvcF~5kFNqNsf24923sNWKZ8nZL8WxOggJXrejcARhkzwh7G4DCpGN6PpPsbojbKJ3Qv4ZJqd~w6x7vVdcVi1dxsZtNpVzV7M47B9EatTp7nSzXRnMxVhYesCQ02PmC5UvV5TdvYdjQ0jQaNS3mQpebF1tg6UzD6A42UGZFkCZIgcdmekThAWPGexCCjfup9PRWQnQdf~0rdKewsn7LAwxPpR2IwSgivX2O~s46UKJjcVWy9wogq7QX9NAzQIUoV29DVzD18qR7AjB-byeBtuafKvGvg__',
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
      'https://s3-alpha-sig.figma.com/img/5884/a9a3/850993a22ae68a1d928237508e713a95?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PUVlmyDBuGd4II7wipQawCSRUyyoxBtJyqdfXBhpYqcPag4kTlvgyDWZ-2IvcF~5kFNqNsf24923sNWKZ8nZL8WxOggJXrejcARhkzwh7G4DCpGN6PpPsbojbKJ3Qv4ZJqd~w6x7vVdcVi1dxsZtNpVzV7M47B9EatTp7nSzXRnMxVhYesCQ02PmC5UvV5TdvYdjQ0jQaNS3mQpebF1tg6UzD6A42UGZFkCZIgcdmekThAWPGexCCjfup9PRWQnQdf~0rdKewsn7LAwxPpR2IwSgivX2O~s46UKJjcVWy9wogq7QX9NAzQIUoV29DVzD18qR7AjB-byeBtuafKvGvg__',
    name: 'William Miller',
    nickname: 'Brian',
    type: 'Bought',
    share: '+4',
    price: '-2.883',
    avatar1:
      'https://s3-alpha-sig.figma.com/img/d138/c800/8678b73810e3250021201b1c109dfd71?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B8kiFsfkEy6OxlDBABAKQ9SbzMCUFr1hJz9YucH2N69g-btcYP97j~lPyoYJC6fVOQGGXyr7G7OFMtS1hozUMvkuEsSvyV9f7ysmt6R4WggMeXVhVaEAvfQRqcOvaLvRvt831tVU-B1YR-7R7upWuuIH3B4iUmz6ot4evXmUEInB-NH~zVmkWl5E~kVKKXcX~uxgD8uV0ayHbjFsoxAlZMWbHuTQ2ai9nbBqTTXZfzlon6kOSIc1WVeKWK8qozVpvkp77GHQ1F3nM1HZbMTJZrNNMy8-G3vEJjQLTWHsNZt-3bUgRR5y4-fcPqkP1NHIZ1ezoko3YGY2HndqnzLMWw__',
    nickname1: 'Patricia',
    time: '2024/02/10  11:14',
  },
  {
    id: 8,
    avatar:
      'https://s3-alpha-sig.figma.com/img/5884/a9a3/850993a22ae68a1d928237508e713a95?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PUVlmyDBuGd4II7wipQawCSRUyyoxBtJyqdfXBhpYqcPag4kTlvgyDWZ-2IvcF~5kFNqNsf24923sNWKZ8nZL8WxOggJXrejcARhkzwh7G4DCpGN6PpPsbojbKJ3Qv4ZJqd~w6x7vVdcVi1dxsZtNpVzV7M47B9EatTp7nSzXRnMxVhYesCQ02PmC5UvV5TdvYdjQ0jQaNS3mQpebF1tg6UzD6A42UGZFkCZIgcdmekThAWPGexCCjfup9PRWQnQdf~0rdKewsn7LAwxPpR2IwSgivX2O~s46UKJjcVWy9wogq7QX9NAzQIUoV29DVzD18qR7AjB-byeBtuafKvGvg__',
    name: 'Patricia Smith',
    nickname: 'Robert',
    avatar1:
      'https://s3-alpha-sig.figma.com/img/0f68/3ae1/4ab8a414136ff5309aa90fce411b6961?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4zCtFmv0fiKRy1eD5~KtUJtyMMPY3KXydDxoe8jWJNN2V6tq1WDqUEvzwyiqW3~ixWv~tcoT3NWC3THoBYywjfv5NPYqarNyPGLmsajnMc-PdMc5IqFU8vAIrmmE2qXtY1ypEoIIcDo3G-IKKFilCN4M45XdYd6SGsnYTrqs-zVbb7K8cASTy-cwQK~eXjY7SSoGkT5EY1wF4XR7KXQzxn7zAI0pGRk46j75-yloV0oGlU3Z3uOnfF0Ol1DzvJKMZ-Lp-j2hOTwCDkCOZG5Ue-X1oviqzH~00fuDVD1QeToOhqBolzZ-BqyDz2BC-yBP2mvvcXtAE4sSQnY5ff3EA__',
    nickname1: 'Eric',
    type: 'Sold',
    share: '-8',
    price: '+0.52',
    time: '2024/01/15  15:24',
  },
  {
    id: 1,
    avatar:
      'https://s3-alpha-sig.figma.com/img/1203/cf03/bb9345489f0ac2959e0b644729346c7e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QsTTmZc0rLNJgBCpuHWLL5loeEOW6QmPzmNTyrl4bSellvqIS1ieS8bF5kVdkTSeFIi7g1n4rt5WO9xoPLawO71FBgjEbc368XmOSf4jkv3~46VYjLGBvoS3q2~VFMqmU-dK5bVBFk0Y8ayggsqIC4o90qCslk8nfmG2sggPPaeqfDM3fmTFd3sehCELMUEQIBooyeIsUJmU6kxGM-53QxtMrLYJQp774tDSGA9W4rQVtztpPWWqLOOtuXN4lZZMezMcP2WQZyJMOb2zdCY5VoNen6dUeXLqK9~JrfWP8DEqEbGSqbv86QQ1NR8SF-HZ-07kzznXDMP-Th47PJSaQw__',
    name: 'Patricia Smith',
    nickname: 'John',
    avatar1:
      'https://s3-alpha-sig.figma.com/img/83f4/ec48/7d873296a617b4d39fc01f7c9ddcbd29?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPvVQvAOT5v9hZx8vs45fFUAtuYk1UHxskcV0gW4wLB35JGLX~naaPt2yn5KpPPtFur23Wp6xjFZL18FfDcUHWlHAswgYeg4k2-WL-KCqFoZfDe-6V6QBa3iEz2PNwuZLrFCjd7EUG~gR6nU2C~9YW2kMJ8qQQFfn5~UIClh2eY01mRDxn4kkmXxHEk-qAeTrVS9rw4lhh9AVqLkdSiPQsNpVI-~zEHAQgym5IG5wWyvEV2mVw5eKGII6MVBHZ8smS8Cv~jACa~z3ahc7TIZISzcc5P~HWYksUYa6BWQzc5j0uFvmCjO1VglzChRSKezabiCED2M1KPJaZvGMD3~UA__',
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
      'https://s3-alpha-sig.figma.com/img/cafb/bfb3/79841c5839bda8db1c23698bcd76f327?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pwaIJresrWgX-PU3bOfZD5LNUst8YKfkjlbd8CYq03uFNfNRtYSN4LrOr1TCjyMQneQ7oWOkJQcmZrdNLw6aEA4W82OZPqoDtF7d3HGrtE1cWB2cQK40QqjF-YFXZTPjh~am5ZH7mQ66~rG5covo4GDeEp4TkcugBhRmej3lDmzrbRoc5ZVGdavFNoyzOFN2RwDjPh6FDweDTzgBTrBLF2EZkYfXCgptb14RZwOWHTN7WLaLKnuiSs4J28kBpUuzoL3MrGUZwaKCrVkHDpLtAKTxZ~Jv5nx0zBaoT0IHdSkQIdDVm9I-Sva-7h9gZMBdN5q2MieoUEu0usLASMSgIw__',
    name: 'Brenda Johnson',
    nickname: 'Robert',
    time: 'Jan 05 2023, 14:32',
    text: 'History is always extremely similar bitcoin is the invention of satoshi nakamoto, Chinese people early to give him dry up ethereum is v god made',
    rank: 21,
  },
  {
    id: 1,
    avatar:
      'https://s3-alpha-sig.figma.com/img/b0e6/1e6e/9e0b10bc7df7f8b016a4a4b14a72390c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jnbGI97jQAvsSduElyoEwhWDBy3ytk-UwcwPR4fNFQEGeEQV~28hanQuhf5r6umsnzldxFhwhONJyKMjTNU2r2st4byQ6livJ7w6D6wI6ZbYfm7MZIMfy5JnzMqplGZ5CWHjnzw84MCz8NlIHKnNlWjWKZajIc6izKmEAz9pMrPxCdOSFT~BTODNdLX9X8cQ52IVybWUQyDjieMs3g69nQrGSufNTGiAjlfO6ZOJj1-R5C7zpMmozB5NCDRCpyQjHuwK6bpVYKF3UomzKKTgts6gX1OcJFyLDoqdugwOiVUuz8GBT6AMunwKhFjIYWTewHsEJiM2evEe8ST1BAX5Yw__',
    name: 'Laura Lewis',
    nickname: 'Mark',
    time: 'Dec 03 2023, 15:26',
    text: 'Zen is process of "Decentring", it\'s a practice to retrospect the relationship btwn self and any man-made imaginary belief constructs: love, marriage, status, nation state and race, token is just a subset of this',
    rank: 192,
  },
  {
    id: 4,
    avatar:
      'https://s3-alpha-sig.figma.com/img/1203/cf03/bb9345489f0ac2959e0b644729346c7e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QsTTmZc0rLNJgBCpuHWLL5loeEOW6QmPzmNTyrl4bSellvqIS1ieS8bF5kVdkTSeFIi7g1n4rt5WO9xoPLawO71FBgjEbc368XmOSf4jkv3~46VYjLGBvoS3q2~VFMqmU-dK5bVBFk0Y8ayggsqIC4o90qCslk8nfmG2sggPPaeqfDM3fmTFd3sehCELMUEQIBooyeIsUJmU6kxGM-53QxtMrLYJQp774tDSGA9W4rQVtztpPWWqLOOtuXN4lZZMezMcP2WQZyJMOb2zdCY5VoNen6dUeXLqK9~JrfWP8DEqEbGSqbv86QQ1NR8SF-HZ-07kzznXDMP-Th47PJSaQw__',
    name: 'Steven Garcia',
    nickname: 'Joseph',
    time: 'Apr 09 2023, 14:18',
    text: 'If Victor Orban continues to be so remarkably based I’m going to invest 100,000,000 dollars into Hungary just out of respect.',
    rank: 239,
  },
  {
    id: 2,
    avatar:
      'https://s3-alpha-sig.figma.com/img/d712/b94a/0f3c705a168c7a61bdcc46bb8982e19e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LltFuhXlBH1-A7lCckFbTpCGJHH-3f7vPw6ftASlu7cTJIdTbUUDLuKVbRKZm8lun6hNnKCc9J3LjrONBa~mUUQUzbJfDhrOZ0FE5~0~o2rcRX9ALCfR44K8H3BOzGCfoRHEdAYnR0aFPWfNcocsI6C0zHmrsmatwooKyF3fmbVtxHRVe3kKwHUX3OOBIdzY9fYOp0y0KVD73P0wNkmeOwEB-Af31JgSHyAZTCcvfONmwNCJKeXwEJDwY~sT9N8uKNOQgLQ2KA42m6PK79-FOXEwbDAtxx4akM~uPkl-xOQeIyeZZUxAtRCdqVvFskGpfL6GTOwM7YkEjT5e2TNCGQ__',
    name: 'Shirley Moore',
    nickname: 'Linda',
    time: 'Apr 16 2023, 20:12',
    text: 'Describe this young man in one word... 🌟',
    rank: 534,
  },
  {
    id: 8,
    avatar:
      'https://s3-alpha-sig.figma.com/img/0f68/3ae1/4ab8a414136ff5309aa90fce411b6961?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4zCtFmv0fiKRy1eD5~KtUJtyMMPY3KXydDxoe8jWJNN2V6tq1WDqUEvzwyiqW3~ixWv~tcoT3NWC3THoBYywjfv5NPYqarNyPGLmsajnMc-PdMc5IqFU8vAIrmmE2qXtY1ypEoIIcDo3G-IKKFilCN4M45XdYd6SGsnYTrqs-zVbb7K8cASTy-cwQK~eXjY7SSoGkT5EY1wF4XR7KXQzxn7zAI0pGRk46j75-yloV0oGlU3Z3uOnfF0Ol1DzvJKMZ-Lp-j2hOTwCDkCOZG5Ue-X1oviqzH~00fuDVD1QeToOhqBolzZ-BqyDz2BC-yBP2mvvcXtAE4sSQnY5ff3EA__',
    name: 'Patricia Smith',
    nickname: 'Eric',
    time: 'Jun 07 2023, 21:08',
    text: 'Nigeria are into the AFCON semi-finals 🇳🇬 Congratulations to Frank Onyeka, Calvin Bassey, Ola Aina and Alex Iwobi 👏',
    rank: 623,
  },
];

export { activites, reward, topList };

export default mockData;
