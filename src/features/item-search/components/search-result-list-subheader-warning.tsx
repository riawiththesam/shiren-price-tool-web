import Box from "@mui/material/Box";

export const WarningTypeList = ["Noroi", "Shukufuku"] as const;
export type WarningType = (typeof WarningTypeList)[number];

export interface SearchResultListSubheaderWarningProps {
  show: boolean;
  warningType: WarningType;
}

type WarningTypeToTextMap = {
  [key in WarningType]: string;
};
const warningTypeToTextMap: WarningTypeToTextMap = {
  Noroi: "呪",
  Shukufuku: "祝",
};

export const SearchResultListSubheaderWarning: React.FC<
  SearchResultListSubheaderWarningProps
> = (props) => {
  const { show, warningType } = props;
  if (!show) return null;
  return (
    <Box component="span" sx={{ color: "warning.main", marginLeft: 1 }}>
      {warningTypeToTextMap[warningType]}
    </Box>
  );
};
