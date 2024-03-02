import Typography from "@mui/material/Typography";

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
    <Typography component="span" sx={{ color: "warning.main" }}>
      {warningTypeToTextMap[warningType]}
    </Typography>
  );
};
