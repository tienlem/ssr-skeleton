import styled from 'styled-components';
import { color } from 'styles/colorPalette';
export const StyledLayout = styled.div`
  width: 100%;
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${color.DOVE_GRAY};

  .menu-wrapper {
    display: flex;
    align-items: center;
    float: right;
    height: 100%;
  }

  .avatar {
    padding-right: 10px;
    .custom-icon-account {
      font-size: 20px;
    }
  }
`;

export const StyledContent = styled.div`
  width: 100%;
  min-height: calc(100vh - 160px);
`;

export const StyledFooter = styled.div`
  width: 100%;
  height: 80px;
  border-top: 1px solid ${color.DOVE_GRAY};
  .content {
    color: red;
  }
`;
