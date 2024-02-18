import React from 'react';

const list = [
  {
    avatar:
      'https://s3-alpha-sig.figma.com/img/cafb/bfb3/79841c5839bda8db1c23698bcd76f327?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~9PwIwBNGImUSsrQbjgcHzw~HyMFI1psmUWKcMYNaylxi9R7FAx5FOHCY8JgX97SB8veSosooX8L88ZTYOgwaEKyT9hXzbyRHg67PnirX6vxwmr-49ZIWnIIlajVVvH4~b8H9bjrrS0efWVYmFDTR2UU7muBjEyBaOv~~Bdz2wP~EBsD1tZ2Ox3X5wByacUb1Gen9cSRjXp5V2xEuVLldu~UUU7rVlCb~jpZ~qLyG8K7t~YqZyfrfvfvIJ66y--P7lSgH3uOTb5jo0i-Xw0LDNUhmOHgX1SekOqEe-8V0SWO3wHwBvA4-GGsef5MAW5cKBdMdab0~eyQU6C7h1Y0g__',
    title: 'Damo‘s  Community',
    text: '[12] frank：hi frens',
  },
  {
    avatar:
      'https://s3-alpha-sig.figma.com/img/1203/cf03/bb9345489f0ac2959e0b644729346c7e?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KJ8hCWPSoBza1eLqmxr4B6InmTHdHP1xO8EQRuIcGvDZ4wi~qaKyRmh0gAfTqGdmkxIiAaosFbW1jHfR5TD2~ET5ak017f-6y5mx5BqCmVD2jtRDZORwwDNj175dE-zA5EasjO1XF~t77KdDeIzuPCfZtCB9oYn6AMkGLxNrSqDWuvrSxloa-llXwOT20hGLDzQmF7TOXPaOgwBWt1XuZk2Bq5Ns~1A~nAzjfA6e3ywYJJ3Nh6BHKcuItbYbdFtzBqBX56IWH1M9WT4YiycEmrLqZ7NshcUWqXT5NoDZBnQmWvz3YhHN8Ie9tX6hWSMfeV6egAjanGFYuN4yDrLU4g__',
    title: 'Esther‘s  Community',
    text: '[16] Cook：Over 30M was collected from free mium ',
  },
  {
    avatar:
      'https://s3-alpha-sig.figma.com/img/d712/b94a/0f3c705a168c7a61bdcc46bb8982e19e?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MZ3iw21cVVnb2cpL5nYu5TWrk4UD66G~dTFXD6zCsoojSxZkzxi5~YOidx~0gt9A21HUSA3tQXoGAqDW5rFKoQYaf8gDLaJq39~FB91jt1~zIAA0YZHnoCtoVZKMlZqprsDNfm8v~lIdFRh6pCu-0Quinae9kLDkWEMGzFzktLYeUn5waO0m-FZVWkEDKZwIuNRG7Qav8-fm87deHRqxlRFUB5JB8ljMr6KGQxOFZrELwscItwL49S5gD~ne9Vn0cYSTQBcfcyg9zjJ3ay6AhrCqn~Ydbuc5tA8A9hhmhSwvpK3rGaR8QymL0Z1I60D0EIfb0D4axvFfoiV7szFg~A__',
    title: 'Bessie‘s  Community',
    text: '[18] Poing：2024 will be a fruitful year for  stakers',
  },
  {
    avatar:
      'https://s3-alpha-sig.figma.com/img/0f68/3ae1/4ab8a414136ff5309aa90fce411b6961?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIAWPZMGC5Pn8jHuv6knMVyzT2BHbRYITNgg2ejTmoOBGKqIVAn-XEs21N228jjXmWc9iRCcZEZpdPzoNUOhDe6U997zvQGDcZaS87Q9GlS7p3dFGCzHnFdloT3pruWZ5yyaQi0objGE0jUEJawP659IwibYua35jwbzR8C6QFEjmB-mgl9iXYRYreABfn4l4ElMWEpT-xia-OYEUgpBWvqUKxWSpfKGbg3VUiipKmAOuPVz~Ro8ahnWWPXw~0KEsSWvQl5Cr-Q7hgcX0Ne9GyY5vWYvYGgELcNOpmNB88of8Dq~EnLwRwRVNK4tl8SkwNo1VQhrv5ZUJscmEKGJxw__',
    title: 'Richards‘s  Community',
    text: '[20] Moke：hi frens',
  },
];

const Community = () => {
  const list1 = Array(4).fill('');

  return (
    <div className="mx-4 relative">
      <div
        className="absolute w-full h-full flex items-center justify-center"
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.78) 43.09%, #FFF 110.54%)',
        }}
      >
        <span
          className="text-[#9A6CF9] text-[27px] font-bold"
          style={{
            textShadow: '3px 4px 5.1px rgba(154, 108, 249, 0.50)',
            letterSpacing: 3,
            marginTop: -120,
          }}
        >
          Coming soon
        </span>
      </div>
      <ul>
        {list.map((item, i) => (
          <li
            key={i}
            className={`px-1 py-[10px] ${
              i === list1.length - 1 ? '' : 'border-b border-b-[#EBEEF0]'
            }`}
          >
            <div className="ml-3 flex items-center">
              <img src={item.avatar} alt="" className="w-[44px] rounded-full" />
              <div className="ml-[28px]">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center">
                    <span className="text-sm text-black font-medium w-[210px]">{item.title}</span>
                    <span className="text-[#A1A1AA] text-xs ml-10">21:22</span>
                  </div>

                  <p className="text-[#5B7083] text-xs">{item.text}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <p className="text-center mt-10 text-[#9A6CF9] text-[15px] font-medium">
        The Following Are Unlocked Communities
      </p>

      <ul className="mt-4 space-y-[10px]">
        {list1.map((item, i) => (
          <li
            key={i}
            className="py-2 px-3 flex items-center space-x-[14px] rounded-[8px] bg-[#F7F9FA]"
          >
            <img
              src="https://cdn.oasiscircle.xyz/circle/4A5E15E2-2210-40AC-9778-FB5D7CC664A1.1706768249263.0xA0B5B5"
              alt=""
              className="w-[60px] rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-black text-sm font-medium">Barlend‘ Community</span>
              <div className="flex items-start justify-between">
                <span className="text-[#5B7083] text-xs">Unlock Requires Staking: 5</span>
                <span className="text-[#5B7083] text-xs">Staked: 0</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Community;
