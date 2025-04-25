import { pipe } from 'rxjs';
import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });


  it('revers string correctly',()=>{
    const pipe = new ReversePipe();
    expect(pipe.transform('code')).toBe('edoc');

  });

  it('return empty string when value is empty',()=>{

    const pipe = new ReversePipe();
    expect(pipe.transform('')).toBe('');
  });

});
