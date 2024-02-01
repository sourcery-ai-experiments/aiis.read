import React from 'react';

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
          }}
        >
          Coming soon
        </span>
      </div>
      <ul>
        {list1.map((item, i) => (
          <li
            key={i}
            className={`px-1 py-[10px] ${
              i === list1.length - 1 ? '' : 'border-b border-b-[#EBEEF0]'
            }`}
          >
            <div className="ml-3 flex items-center">
              <img
                src="https://cdn.oasiscircle.xyz/circle/4A5E15E2-2210-40AC-9778-FB5D7CC664A1.1706768249263.0xA0B5B5"
                alt=""
                className="w-[44px] rounded-full"
              />
              <div className="ml-[28px]">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center">
                    <span className="text-sm text-black font-medium w-[210px]">
                      Deovokoejhdnad...‘ Community
                    </span>
                    <span className="text-[#A1A1AA] text-xs ml-10">21:22</span>
                  </div>

                  <p className="text-[#5B7083] text-xs">[16] Frank：xxxxxxxxxxxxxxxxxxx</p>
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
