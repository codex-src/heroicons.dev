import * as Hero from "components/heroicons"

const originalIcons = [
	{
		name: "adjustments",
		outline: Hero.Adjustments_md,
		solid: Hero.Adjustments_sm,
		// tags: "adjustments configure controls settings sliders",
	},
	{
		name: "annotation",
		outline: Hero.Annotation_md,
		solid: Hero.Annotation_sm,
		// tags: "annotation box chat comment message square suggestion",
	},
	{
		name: "archive",
		outline: Hero.Archive_md,
		solid: Hero.Archive_sm,
		// tags: "archive bin",
	},
	{
		name: "arrow-circle-down",
		outline: Hero.ArrowCircleDown_md,
		solid: Hero.ArrowCircleDown_sm,
		// tags: "arrow circle direction down"
	},
	{
		name: "arrow-circle-left",
		outline: Hero.ArrowCircleLeft_md,
		solid: Hero.ArrowCircleLeft_sm,
		// tags: "arrow circle direction left"
	},
	{
		name: "arrow-circle-right",
		outline: Hero.ArrowCircleRight_md,
		solid: Hero.ArrowCircleRight_sm,
		// tags: "arrow circle direction right"
	},
	{
		name: "arrow-circle-up",
		outline: Hero.ArrowCircleUp_md,
		solid: Hero.ArrowCircleUp_sm,
		// tags: "arrow circle direction up"
	},
	{
		name: "arrow-down",
		outline: Hero.ArrowDown_md,
		solid: Hero.ArrowDown_sm,
		// tags: "arrow circle direction down"
	},
	{
		name: "arrow-left",
		outline: Hero.ArrowLeft_md,
		solid: Hero.ArrowLeft_sm,
		// tags: "arrow direction left"
	},
	{
		name: "arrow-narrow-down",
		outline: Hero.ArrowNarrowDown_md,
		solid: Hero.ArrowNarrowDown_sm,
		// tags: "arrow direction down narrow"
	},
	{
		name: "arrow-narrow-left",
		outline: Hero.ArrowNarrowLeft_md,
		solid: Hero.ArrowNarrowLeft_sm,
		// tags: "arrow direction left narrow"
	},
	{
		name: "arrow-narrow-right",
		outline: Hero.ArrowNarrowRight_md,
		solid: Hero.ArrowNarrowRight_sm,
		// tags: "arrow direction narrow right"
	},
	{
		name: "arrow-narrow-up",
		outline: Hero.ArrowNarrowUp_md,
		solid: Hero.ArrowNarrowUp_sm,
		// tags: "arrow direction narrow up"
	},
	{
		name: "arrow-right",
		outline: Hero.ArrowRight_md,
		solid: Hero.ArrowRight_sm,
		// tags: "arrow direction right"
	},
	{
		name: "arrow-up",
		outline: Hero.ArrowUp_md,
		solid: Hero.ArrowUp_sm,
		// tags: "arrow direction up"
	},
	{
		name: "at-symbol",
		outline: Hero.AtSymbol_md,
		solid: Hero.AtSymbol_sm,
		// tags: "address at email symbol"
	},
	{
		name: "bell",
		outline: Hero.Bell_md,
		solid: Hero.Bell_sm,
		// tags: "alert bell notification",
	},
	{
		name: "book-open",
		outline: Hero.BookOpen_md,
		solid: Hero.BookOpen_sm,
		// tags: "book bookmark open page read",
	},
	{
		name: "bookmark",
		outline: Hero.Bookmark_md,
		solid: Hero.Bookmark_sm,
		// tags: "book bookmark",
	},
	{
		name: "briefcase",
		outline: Hero.Briefcase_md,
		solid: Hero.Briefcase_sm,
		// tags: "bag briefcase business travel",
	},
	{
		name: "calendar",
		outline: Hero.Calendar_md,
		solid: Hero.Calendar_sm,
		// tags: "calendar date time travel",
	},
	{
		name: "camera",
		outline: Hero.Camera_md,
		solid: Hero.Camera_sm,
		// tags: "camera photo photography travel",
	},
	{
		name: "cash",
		outline: Hero.Cash_md,
		solid: Hero.Cash_sm,
		// tags: "bill cash dollar money",
	},
	{
		name: "chart-pie",
		outline: Hero.ChartPie_md,
		solid: Hero.ChartPie_sm,
		// tags: "business chart data math science",
	},
	{
		name: "chat",
		outline: Hero.Chat_md,
		solid: Hero.Chat_sm,
		// tags: "annotation bubble chat circle comment message suggestion",
	},
	{
		name: "check-circle",
		outline: Hero.CheckCircle_md,
		solid: Hero.CheckCircle_sm,
		// tags: "check circle complete done task todo",
	},
	{
		name: "check",
		outline: Hero.Check_md,
		solid: Hero.Check_sm,
		// tags: "check complete done task todo",
	},
	{
		name: "cheveron-down",
		outline: Hero.CheveronDown_md,
		solid: Hero.CheveronDown_sm,
		// tags: "arrow cheveron chevron direction down",
	},
	{
		name: "cheveron-left",
		outline: Hero.CheveronLeft_md,
		solid: Hero.CheveronLeft_sm,
		// tags: "arrow cheveron chevron direction left",
	},
	{
		name: "cheveron-right",
		outline: Hero.CheveronRight_md,
		solid: Hero.CheveronRight_sm,
		// tags: "arrow cheveron chevron direction right",
	},
	{
		name: "cheveron-up",
		outline: Hero.CheveronUp_md,
		solid: Hero.CheveronUp_sm,
		// tags: "arrow cheveron chevron direction up",
	},
	{
		name: "clipboard-check",
		outline: Hero.ClipboardCheck_md,
		solid: Hero.ClipboardCheck_sm,
		// tags: "check clipboard copy done paste task todo",
	},
	{
		name: "clipboard-copy",
		outline: Hero.ClipboardCopy_md,
		solid: Hero.ClipboardCopy_sm,
		// tags: "check clipboard copy done paste task todo",
	},
	{
		name: "clipboard-list",
		outline: Hero.ClipboardList_md,
		solid: Hero.ClipboardList_sm,
		// tags: "check clipboard copy done paste task todo",
	},
	{
		name: "clipboard",
		outline: Hero.Clipboard_md,
		solid: Hero.Clipboard_sm,
		// tags: "check clipboard copy done paste task todo",
	},
	{
		name: "clock",
		outline: Hero.Clock_md,
		solid: Hero.Clock_sm,
		// tags: "",
	},
	{
		name: "cloud-download",
		outline: Hero.CloudDownload_md,
		solid: Hero.CloudDownload_sm,
		// tags: "",
	},
	{
		name: "cloud-upload",
		outline: Hero.CloudUpload_md,
		solid: Hero.CloudUpload_sm,
		// tags: "",
	},
	{
		name: "code",
		outline: Hero.Code_md,
		solid: Hero.Code_sm,
		// tags: "",
	},
	{
		name: "cog",
		outline: Hero.Cog_md,
		solid: Hero.Cog_sm,
		// tags: "",
	},
	{
		name: "collection",
		outline: Hero.Collection_md,
		solid: Hero.Collection_sm,
		// tags: "",
	},
	{
		name: "color-swatch",
		outline: Hero.ColorSwatch_md,
		solid: Hero.ColorSwatch_sm,
		// tags: "",
	},
	{
		name: "credit-card",
		outline: Hero.CreditCard_md,
		solid: Hero.CreditCard_sm,
		// tags: "",
	},
	{
		name: "currency-dollar",
		outline: Hero.CurrencyDollar_md,
		solid: Hero.CurrencyDollar_sm,
		// tags: "",
		buggy: true,
	},
	{
		name: "currency-euro",
		outline: Hero.CurrencyEuro_md,
		solid: Hero.CurrencyEuro_sm,
		// tags: "",
	},
	{
		name: "currency-pound",
		outline: Hero.CurrencyPound_md,
		solid: Hero.CurrencyPound_sm,
		// tags: "",
	},
	{
		name: "currency-rupee",
		outline: Hero.CurrencyRupee_md,
		solid: Hero.CurrencyRupee_sm,
		// tags: "",
	},
	{
		name: "currency-yen",
		outline: Hero.CurrencyYen_md,
		solid: Hero.CurrencyYen_sm,
		// tags: "",
	},
	{
		name: "document-add",
		outline: Hero.DocumentAdd_md,
		solid: Hero.DocumentAdd_sm,
		// tags: "",
	},
	{
		name: "document-download",
		outline: Hero.DocumentDownload_md,
		solid: Hero.DocumentDownload_sm,
		// tags: "",
	},
	{
		name: "document-duplicate",
		outline: Hero.DocumentDuplicate_md,
		solid: Hero.DocumentDuplicate_sm,
		// tags: "",
	},
	{
		name: "document-remove",
		outline: Hero.DocumentRemove_md,
		solid: Hero.DocumentRemove_sm,
		// tags: "",
	},
	{
		name: "document",
		outline: Hero.Document_md,
		solid: Hero.Document_sm,
		// tags: "",
	},
	{
		name: "dots-circle-horizontal",
		outline: Hero.DotsCircleHorizontal_md,
		solid: Hero.DotsCircleHorizontal_sm,
		// tags: "",
	},
	{
		name: "dots-horizontal",
		outline: Hero.DotsHorizontal_md,
		solid: Hero.DotsHorizontal_sm,
		// tags: "",
	},
	{
		name: "dots-vertical",
		outline: Hero.DotsVertical_md,
		solid: Hero.DotsVertical_sm,
		// tags: "",
	},
	{
		name: "download",
		outline: Hero.Download_md,
		solid: Hero.Download_sm,
		// tags: "",
	},
	{
		name: "duplicate",
		outline: Hero.Duplicate_md,
		solid: Hero.Duplicate_sm,
		// tags: "",
	},
	{
		name: "emoji-happy",
		outline: Hero.EmojiHappy_md,
		solid: Hero.EmojiHappy_sm,
		// tags: "",
	},
	{
		name: "emoji-sad",
		outline: Hero.EmojiSad_md,
		solid: Hero.EmojiSad_sm,
		// tags: "",
	},
	{
		name: "exclamation-circle",
		outline: Hero.ExclamationCircle_md,
		solid: Hero.ExclamationCircle_sm,
		// tags: "",
	},
	{
		name: "exclamation",
		outline: Hero.Exclamation_md,
		solid: Hero.Exclamation_sm,
		// tags: "",
	},
	{
		name: "external-link",
		outline: Hero.ExternalLink_md,
		solid: Hero.ExternalLink_sm,
		// tags: "",
	},
	{
		name: "eye",
		outline: Hero.Eye_md,
		solid: Hero.Eye_sm,
		// tags: "",
	},
	{
		name: "filter",
		outline: Hero.Filter_md,
		solid: Hero.Filter_sm,
		// tags: "",
	},
	{
		name: "flag",
		outline: Hero.Flag_md,
		solid: Hero.Flag_sm,
		// tags: "",
	},
	{
		name: "folder",
		outline: Hero.Folder_md,
		solid: Hero.Folder_sm,
		// tags: "",
	},
	{
		name: "globe-alt",
		outline: Hero.GlobeAlt_md,
		solid: Hero.GlobeAlt_sm,
		// tags: "",
	},
	{
		name: "globe",
		outline: Hero.Globe_md,
		solid: Hero.Globe_sm,
		// tags: "",
	},
	{
		name: "hashtag",
		outline: Hero.Hashtag_md,
		solid: Hero.Hashtag_sm,
		// tags: "",
	},
	{
		name: "heart",
		outline: Hero.Heart_md,
		solid: Hero.Heart_sm,
		// tags: "",
	},
	{
		name: "home",
		outline: Hero.Home_md,
		solid: Hero.Home_sm,
		// tags: "",
	},
	{
		name: "inbox-in",
		outline: Hero.InboxIn_md,
		solid: Hero.InboxIn_sm,
		// tags: "",
	},
	{
		name: "inbox",
		outline: Hero.Inbox_md,
		solid: Hero.Inbox_sm,
		// tags: "",
	},
	{
		name: "information-circle",
		outline: Hero.InformationCircle_md,
		solid: Hero.InformationCircle_sm,
		// tags: "",
	},
	{
		name: "light-bulb",
		outline: Hero.LightBulb_md,
		solid: Hero.LightBulb_sm,
		// tags: "",
	},
	{
		name: "lightning-bolt",
		outline: Hero.LightningBolt_md,
		solid: Hero.LightningBolt_sm,
		// tags: "",
	},
	{
		name: "link",
		outline: Hero.Link_md,
		solid: Hero.Link_sm,
		// tags: "",
	},
	{
		name: "location-marker",
		outline: Hero.LocationMarker_md,
		solid: Hero.LocationMarker_sm,
		// tags: "",
	},
	{
		name: "lock-closed",
		outline: Hero.LockClosed_md,
		solid: Hero.LockClosed_sm,
		// tags: "",
	},
	{
		name: "lock-open",
		outline: Hero.LockOpen_md,
		solid: Hero.LockOpen_sm,
		// tags: "",
	},
	{
		name: "mail-open",
		outline: Hero.MailOpen_md,
		solid: Hero.MailOpen_sm,
		// tags: "",
	},
	{
		name: "mail",
		outline: Hero.Mail_md,
		solid: Hero.Mail_sm,
		// tags: "",
	},
	{
		name: "menu-alt-1",
		outline: Hero.MenuAlt1_md,
		solid: Hero.MenuAlt1_sm,
		// tags: "",
	},
	{
		name: "menu-alt-2",
		outline: Hero.MenuAlt2_md,
		solid: Hero.MenuAlt2_sm,
		// tags: "",
	},
	{
		name: "menu-alt-3",
		outline: Hero.MenuAlt3_md,
		solid: Hero.MenuAlt3_sm,
		// tags: "",
	},
	{
		name: "menu-alt-4",
		outline: Hero.MenuAlt4_md,
		solid: Hero.MenuAlt4_sm,
		// tags: "",
	},
	{
		name: "menu",
		outline: Hero.Menu_md,
		solid: Hero.Menu_sm,
		// tags: "",
	},
	{
		name: "minus-circle",
		outline: Hero.MinusCircle_md,
		solid: Hero.MinusCircle_sm,
		// tags: "",
	},
	{
		name: "moon",
		outline: Hero.Moon_md,
		solid: Hero.Moon_sm,
		// tags: "",
		buggy: true,
	},
	{
		name: "office-building",
		outline: Hero.OfficeBuilding_md,
		solid: Hero.OfficeBuilding_sm,
		// tags: "",
	},
	{
		name: "paper-clip",
		outline: Hero.PaperClip_md,
		solid: Hero.PaperClip_sm,
		// tags: "",
	},
	{
		name: "pencil-alt",
		outline: Hero.PencilAlt_md,
		solid: Hero.PencilAlt_sm,
		// tags: "",
	},
	{
		name: "pencil",
		outline: Hero.Pencil_md,
		solid: Hero.Pencil_sm,
		// tags: "",
	},
	{
		name: "phone-incoming",
		outline: Hero.PhoneIncoming_md,
		solid: Hero.PhoneIncoming_sm,
		// tags: "",
	},
	{
		name: "phone-outgoing",
		outline: Hero.PhoneOutgoing_md,
		solid: Hero.PhoneOutgoing_sm,
		// tags: "",
	},
	{
		name: "phone",
		outline: Hero.Phone_md,
		solid: Hero.Phone_sm,
		// tags: "",
		buggy: true,
	},
	{
		name: "photograph",
		outline: Hero.Photograph_md,
		solid: Hero.Photograph_sm,
		// tags: "",
	},
	{
		name: "plus-circle",
		outline: Hero.PlusCircle_md,
		solid: Hero.PlusCircle_sm,
		// tags: "",
	},
	{
		name: "plus",
		outline: Hero.Plus_md,
		solid: Hero.Plus_sm,
		// tags: "",
	},
	{
		name: "printer",
		outline: Hero.Printer_md,
		solid: Hero.Printer_sm,
		// tags: "",
	},
	{
		name: "qrcode",
		outline: Hero.Qrcode_md,
		solid: Hero.Qrcode_sm,
		// tags: "",
	},
	{
		name: "question-mark-circle",
		outline: Hero.QuestionMarkCircle_md,
		solid: Hero.QuestionMarkCircle_sm,
		// tags: "",
	},
	{
		name: "receipt-refund",
		outline: Hero.ReceiptRefund_md,
		solid: Hero.ReceiptRefund_sm,
		// tags: "",
	},
	{
		name: "refresh",
		outline: Hero.Refresh_md,
		solid: Hero.Refresh_sm,
		// tags: "",
	},
	{
		name: "reply",
		outline: Hero.Reply_md,
		solid: Hero.Reply_sm,
		// tags: "",
	},
	{
		name: "scale",
		outline: Hero.Scale_md,
		solid: Hero.Scale_sm,
		// tags: "",
	},
	{
		name: "search",
		outline: Hero.Search_md,
		solid: Hero.Search_sm,
		// tags: "",
	},
	{
		name: "selector",
		outline: Hero.Selector_md,
		solid: Hero.Selector_sm,
		// tags: "",
	},
	{
		name: "share",
		outline: Hero.Share_md,
		solid: Hero.Share_sm,
		// tags: "",
	},
	{
		name: "shield-check",
		outline: Hero.ShieldCheck_md,
		solid: Hero.ShieldCheck_sm,
		// tags: "",
	},
	{
		name: "shield-exclamation",
		outline: Hero.ShieldExclamation_md,
		solid: Hero.ShieldExclamation_sm,
		// tags: "",
	},
	{
		name: "sort-ascending",
		outline: Hero.SortAscending_md,
		solid: Hero.SortAscending_sm,
		// tags: "",
	},
	{
		name: "sort-descending",
		outline: Hero.SortDescending_md,
		solid: Hero.SortDescending_sm,
		// tags: "",
	},
	{
		name: "sparkles",
		outline: Hero.Sparkles_md,
		solid: Hero.Sparkles_sm,
		// tags: "",
	},
	{
		name: "sun",
		outline: Hero.Sun_md,
		solid: Hero.Sun_sm,
		// tags: "",
	},
	{
		name: "switch-horizontal",
		outline: Hero.SwitchHorizontal_md,
		solid: Hero.SwitchHorizontal_sm,
		// tags: "",
	},
	{
		name: "switch-vertical",
		outline: Hero.SwitchVertical_md,
		solid: Hero.SwitchVertical_sm,
		// tags: "",
	},
	{
		name: "tag",
		outline: Hero.Tag_md,
		solid: Hero.Tag_sm,
		// tags: "",
	},
	{
		name: "template",
		outline: Hero.Template_md,
		solid: Hero.Template_sm,
		// tags: "",
	},
	{
		name: "ticket",
		outline: Hero.Ticket_md,
		solid: Hero.Ticket_sm,
		// tags: "",
		buggy: true,
	},
	{
		name: "translate",
		outline: Hero.Translate_md,
		solid: Hero.Translate_sm,
		// tags: "",
	},
	{
		name: "trash",
		outline: Hero.Trash_md,
		solid: Hero.Trash_sm,
		// tags: "",
	},
	{
		name: "trending-down",
		outline: Hero.TrendingDown_md,
		solid: Hero.TrendingDown_sm,
		// tags: "",
	},
	{
		name: "trending-up",
		outline: Hero.TrendingUp_md,
		solid: Hero.TrendingUp_sm,
		// tags: "",
	},
	{
		name: "upload",
		outline: Hero.Upload_md,
		solid: Hero.Upload_sm,
		// tags: "",
	},
	{
		name: "user-add",
		outline: Hero.UserAdd_md,
		solid: Hero.UserAdd_sm,
		// tags: "",
	},
	{
		name: "user-circle",
		outline: Hero.UserCircle_md,
		solid: Hero.UserCircle_sm,
		// tags: "",
	},
	{
		name: "user-group",
		outline: Hero.UserGroup_md,
		solid: Hero.UserGroup_sm,
		// tags: "",
	},
	{
		name: "user-remove",
		outline: Hero.UserRemove_md,
		solid: Hero.UserRemove_sm,
		// tags: "",
	},
	{
		name: "user",
		outline: Hero.User_md,
		solid: Hero.User_sm,
		// tags: "",
	},
	{
		name: "users",
		outline: Hero.Users_md,
		solid: Hero.Users_sm,
		// tags: "",
	},
	{
		name: "view-boards",
		outline: Hero.ViewBoards_md,
		solid: Hero.ViewBoards_sm,
		// tags: "",
	},
	{
		name: "view-list",
		outline: Hero.ViewList_md,
		solid: Hero.ViewList_sm,
		// tags: "",
	},
	{
		name: "volume-off",
		outline: Hero.VolumeOff_md,
		solid: Hero.VolumeOff_sm,
		// tags: "",
	},
	{
		name: "volume-up",
		outline: Hero.VolumeUp_md,
		solid: Hero.VolumeUp_sm,
		// tags: "",
	},
	{
		name: "x-circle",
		outline: Hero.XCircle_md,
		solid: Hero.XCircle_sm,
		// tags: "",
	},
	{
		name: "x",
		outline: Hero.X_md,
		solid: Hero.X_sm,
		// tags: "",
	},
	{
		name: "zoom-in",
		outline: Hero.ZoomIn_md,
		solid: Hero.ZoomIn_sm,
		// tags: "",
	},
	{
		name: "zoom-out",
		outline: Hero.ZoomOut_md,
		solid: Hero.ZoomOut_sm,
		// tags: "",
	},
]

export default originalIcons
