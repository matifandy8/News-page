import React from 'react';
import { act, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Cardchannel from './Cardchannel';
import { Channel } from '../../type';


const mockHeadline = {
    "id": "1",
    "name": "Fox News",
    "image": "https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world1.png"
}as Channel;
  
  describe("Cardheadline", () => {
    it("should render the name", () => {
      const { getByText } = render(<Cardchannel channel={mockHeadline} />);
      expect(getByText("Fox News")).toBeInTheDocument();
    });
  
  });
