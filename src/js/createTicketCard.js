export function createTicketCard(item) {
  const li = document.createElement("li");
  li.className =
    "mx-[5%] mb-[30px] w-[90%] rounded-[5px] border border-[#dee2e6] bg-white shadow-md sm:mx-[2%] sm:mb-[40px] sm:w-[46%] md:mb-[38px] md:ml-0 md:w-[31.3333%]";
  const imgUrl = item.imgUrl || "https://via.placeholder.com/150";
  li.innerHTML = `
    <div class="ticketCardImg relative">
      <a class="block overflow-hidden" href="#">
          <img class="hover:scale-125 h-[180px] w-full object-cover transition-transform" src="${imgUrl}" alt="${item.name}">
      </a>
      <div class="ticketCardRegion -top-[13px] left-0 text-xl bg-[#64c3bf] p-[12px_20px]">${item.area}</div>
      <div class="ticketCardRank -bottom-[16px] left-0 min-w-10 bg-[#00807e] p-[5px_8px]">${item.rate}</div>
    </div>
    <div class="ticketCardContent">
      <div>
        <h3>
          <a href="#" class="border-b-5 mb-[20px] block border-b-2 border-primary pb-[5px] font-bold text-primary decoration-0 hover:text-[#64c3bf]">${item.name}</a>
        </h3>
        <p class="text-[#818a91] mb-8">${item.description}</p>
      </div>
      <div class="ticketCardInfo">
        <p class="font-bold">
          <span><i class="fas fa-exclamation-circle"></i></span>
          剩下最後 <span id="ticketCardNum">${item.group}</span> 組
        </p>
        <p class="flex items-center">
          TWD <span class="text-[2rem]" id="ticketCardPrice">$${item.price}</span>
        </p>
      </div>
    </div>
  `;
  return li;
}
