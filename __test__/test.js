import React from 'react';
import { shallow } from 'enzyme';
import Markdown from '../src/index';
import renderer from 'react-test-renderer';



describe('<Markdown />', ()=>{
    const wrapper = shallow(<Markdown />);
    const Header = shallow(<Header />);
    const colors = shallow(<Colors />);

    it('Should have one <Head /> component ', () => {
        expect(wrapper.find(Head)).to.have.length(1);
      });

    it('Should have one <Workspace /> component', () => {
        expect(wrapper.find(Workspace)).to.have.length(1);
      });

    it('Should have one <Footer /> component', () => {
        expect(wrapper.find(Footer)).to.have.length(1);
      });

    it('Should have one <Colors /> component', () => {
        expect(Header.find(Colors)).to.have.length(1);
      });

    it('Should have 1 colors div elements', () => {
        expect(colors.find('div#colors')).to.have.length(1);
      });

    it('Should have 3 list elements', () => {
        expect(colors.find('li ')).to.have.length(3);
      });

      

});