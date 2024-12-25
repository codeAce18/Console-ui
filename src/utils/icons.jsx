import QuestionCircle from "../assets/QuestionCircle.svg";
import MoreVert from "../assets/MoreVert.svg";

export const iconConfigs = [
  {
    icon: QuestionCircle,
    alt: "QuestionCircle",
    content:(
      <div className="pt-[8px]">
        <div className="bg-white w-[250px] space-y-[20px] flex flex-col items-start px-[20px] py-[20px] shadow-lg">
          <div className="space-y-[10px] border-b-[1px] w-full pb-[10px]">
            <h1 className="text-[15px]">Browse documentation</h1>
            <h1 className="text-[15px]">view architecture guides</h1>
            <h1 className="text-[15px]">View help FAQs</h1>
          </div>

          <div className="space-y-[10px] border-b-[1px] w-full pb-[10px]">
            <h1 className="text-[15px]">Get support</h1>
            <p className="text-[12px]">Live and self-service support options</p>
          </div>

          <div className="space-y-[10px] border-b-[1px] w-full pb-[10px]">
            <h1 className="text-[15px]">Configure Keyboard shortcuts</h1>
          </div>

          <div>
            <h1 className="text-[15px]">Send feedback</h1>
          </div>
        </div>
      </div>
          
    ),
  },
  {
    icon: MoreVert,
    alt: "MoreVert",
    content: (
      <div className="pt-[8px]">
        <div className="bg-white w-[150px] space-y-[20px] flex flex-col items-start px-[20px] py-[20px] shadow-lg">
          <div className="border-b-[1px] pb-[10px] w-full">
            <h3 className="font-semibold">Gemini AI</h3>
          </div>
          <div className="border-b-[1px] pb-[10px] w-full">
            <h3 className="font-semibold">Activate Cloud</h3>
          </div>
          <div className="border-b-[1px] pb-[10px] w-full">
            <h3 className="font-semibold">Promotions</h3>
          </div>
          <div className="border-b-[1px] pb-[10px] w-full">
            <h1 className="cursor-pointer text-[15px] hover:bg-gray-200 p-[6px] rounded-[8px]">
              Preferences
            </h1>
          </div>
          <div className="border-b-[1px] pb-[10px] w-full space-y-[10px]">
            <h1 className="cursor-pointer text-[15px] hover:bg-gray-200 p-[5px] rounded-[8px]">
              Downloads
            </h1>
            <h1 className="cursor-pointer text-[15px] hover:bg-gray-200 p-[5px] rounded-[8px] whitespace-nowrap">
              Cloud Partners
            </h1>
          </div>
          <div className="space-y-[10px]">
            <h1 className="cursor-pointer text-[15px] hover:bg-gray-200 p-[5px] rounded-[8px] whitespace-nowrap">
              Terms of service
            </h1>
            <h1 className="cursor-pointer text-[15px] hover:bg-gray-200 p-[5px] rounded-[8px]">
              Privacy
            </h1>
          </div>
        </div>
      </div>
    ),
    mobileContent: [
      {
        title: "Help & Documentation",
        items: [
          { label: "Browse Documentation", type: "action" },
          { label: "View architecture guides", type: "action" },
          { label: "View help FAQs", type: "action" },
          { label: "Start a tutorial", type: "action" }
        ]
      },
      {
        title: "Get support",
        subtitle: "Live and self-service support options",
        type: "info"
      },
      {
        title: "Shortcuts & Feedback",
        items: [
          { label: "Configured keyboard shortcuts", type: "action" },
          { label: "Send feedback", type: "action" }
        ]
      },


      // Existing MoreVert sections
      {
        title: "Gemini AI",
        type: "section"
      },
      {
        title: "Activate Cloud",
        type: "section"
      },
      {
        title: "Promotions",
        type: "section"
      },
      {
        title: "Actions",
        items: [
          { label: "Preferences", type: "action" },
          { label: "Downloads", type: "action" },
          { label: "Cloud Partners", type: "action" }
        ]
      },
      {
        items: [
          { label: "Terms of service", type: "action" },
          { label: "Privacy", type: "action" }
        ]
      }
    ]
  },
];