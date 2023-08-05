import React from 'react';
import './Table.scss';
import InfoIcon from '@mui/icons-material/Info';

import {
  largeCircleValue1,
  largeCircleValue4,
  largeCircleValue5,
  largeCircleValue8,
  largeCircleValueCenter,
  getSum,
} from '../../functions/calculator';
import { useAppSelector } from '../../hooks/redux';
import { Tooltip } from '@mui/material';

export const Table = () => {
  const { mainString, userDataPersonal } = useAppSelector((state) => state.storeReducer);
  // const mainString = ['2', '4', '0', '1', '1', '9', '9', '7'];

  return (
    <div className="table_container">
      <h3>Карта здоров&apos;я</h3>
      <table>
        <tbody>
          <tr className="th_header">
            <th className="th_table th_xs td_number"></th>
            <th className="th_table th_large ch-name">Назва чакри</th>
            <th className="th_table th_small">Фізика</th>
            <th className="th_table th_small">Енергія</th>

            <th className="th_table th_small">Емоції</th>
          </tr>
          <tr className="tr_seven">
            <td className="td_number">
              <span>7</span>
            </td>
            <td className="ch-name">
              <div className="tooltip">
                <Tooltip title="Зв'язок з Вищими силами, контакт з внутрішнім &#171;Я&#187;, духовні задачі людини">
                  <InfoIcon style={{ fontSize: 20, fill: '#ffff' }} />
                </Tooltip>
              </div>
              <div className="info-wrapper">
                <span>Сахасрара</span>
                {/*<span className="ch-info">Місія</span>*/}
              </div>
            </td>

            <td>
              <span>{largeCircleValue4(mainString, userDataPersonal.birth)} </span>
            </td>
            <td>
              <span> {largeCircleValue1(mainString, userDataPersonal.birth)}</span>
            </td>
            <td>
              <span>
                {getSum(
                  largeCircleValue4(mainString, userDataPersonal.birth) +
                    largeCircleValue1(mainString, userDataPersonal.birth)
                )}
              </span>
            </td>
          </tr>

          <tr className="tr_six">
            <td className="td_number">
              <span>6</span>
            </td>
            <td className="ch-name">
              <div className="tooltip">
                <Tooltip title="Інтуїція, аналітичні здібності, мислення">
                  <InfoIcon style={{ fontSize: 20, fill: '#ffff' }} />
                </Tooltip>
              </div>
              <div className="info-wrapper">
                <span>Аджна</span>
                {/*<span className="ch-info">Доля, егрегори</span>*/}
              </div>
            </td>

            <td>
              <span>
                {getSum(
                  largeCircleValue4(mainString, userDataPersonal.birth) +
                    largeCircleValue4(mainString, userDataPersonal.birth) +
                    largeCircleValueCenter(mainString, userDataPersonal.birth)
                )}
              </span>
            </td>
            <td>
              <span>
                {getSum(
                  largeCircleValue1(mainString, userDataPersonal.birth) +
                    largeCircleValueCenter(mainString, userDataPersonal.birth) +
                    largeCircleValue1(mainString, userDataPersonal.birth)
                )}
              </span>
            </td>
            <td>
              <span>
                {getSum(
                  getSum(
                    largeCircleValue4(mainString, userDataPersonal.birth) +
                      largeCircleValue4(mainString, userDataPersonal.birth) +
                      largeCircleValueCenter(mainString, userDataPersonal.birth)
                  ) +
                    getSum(
                      largeCircleValue1(mainString, userDataPersonal.birth) +
                        largeCircleValueCenter(mainString, userDataPersonal.birth) +
                        largeCircleValue1(mainString, userDataPersonal.birth)
                    )
                )}
              </span>
            </td>
          </tr>

          <tr className="tr_five">
            <td className="td_number">
              <span>5</span>
            </td>
            <td className="ch-name">
              <div className="tooltip">
                <Tooltip title="Самовираження, спілкування">
                  <InfoIcon style={{ fontSize: 20, fill: '#ffff' }} />
                </Tooltip>
              </div>
              <div className="info-wrapper">
                <span>Вішудха</span>
                {/*<span className="ch-info">Самосприйняття</span>*/}
              </div>
            </td>
            <td>
              <span>
                {getSum(
                  largeCircleValue4(mainString, userDataPersonal.birth) +
                    largeCircleValueCenter(mainString, userDataPersonal.birth)
                )}
              </span>
            </td>
            <td>
              <span>
                {getSum(
                  largeCircleValue1(mainString, userDataPersonal.birth) +
                    largeCircleValueCenter(mainString, userDataPersonal.birth)
                )}
              </span>
            </td>

            <td>
              <span>
                {getSum(
                  getSum(
                    largeCircleValue4(mainString, userDataPersonal.birth) +
                      largeCircleValueCenter(mainString, userDataPersonal.birth)
                  ) +
                    getSum(
                      largeCircleValue1(mainString, userDataPersonal.birth) +
                        largeCircleValueCenter(mainString, userDataPersonal.birth)
                    )
                )}
              </span>
            </td>
          </tr>

          <tr className="tr_eight">
            <td className="td_number">
              <span>4</span>
            </td>
            <td className="ch-name">
              <div className="tooltip">
                <Tooltip title="Стосунки з іншими, справжні бажання душі">
                  <InfoIcon style={{ fontSize: 20, fill: '#ffff' }} />
                </Tooltip>
              </div>
              <div className="info-wrapper">
                <span>Анахата</span>
                {/*<span className="ch-info">Відносини, картина світу</span>*/}
              </div>
            </td>

            <td>
              <span>
                {getSum(
                  largeCircleValueCenter(mainString, userDataPersonal.birth) +
                    largeCircleValue4(mainString, userDataPersonal.birth) +
                    largeCircleValueCenter(mainString, userDataPersonal.birth)
                )}
              </span>
            </td>
            <td>
              <span>
                {getSum(
                  largeCircleValue1(mainString, userDataPersonal.birth) +
                    largeCircleValueCenter(mainString, userDataPersonal.birth) +
                    largeCircleValueCenter(mainString, userDataPersonal.birth)
                )}
              </span>
            </td>
            <td>
              <span>
                {getSum(
                  getSum(
                    largeCircleValueCenter(mainString, userDataPersonal.birth) +
                      largeCircleValue4(mainString, userDataPersonal.birth) +
                      largeCircleValueCenter(mainString, userDataPersonal.birth)
                  ) +
                    getSum(
                      largeCircleValue1(mainString, userDataPersonal.birth) +
                        largeCircleValueCenter(mainString, userDataPersonal.birth) +
                        largeCircleValueCenter(mainString, userDataPersonal.birth)
                    )
                )}
              </span>
            </td>
          </tr>

          <tr className="tr_three">
            <td className="td_number">
              <span>3</span>
            </td>
            <td className="ch-name">
              <div className="tooltip">
                <Tooltip title="Сила волі, рішучість, успіх в кар&#8216;єрі ">
                  <InfoIcon style={{ fontSize: 20, fill: '#ffff' }} />
                </Tooltip>
              </div>
              <div className="info-wrapper">
                <span>Маніпура</span>
                {/*<span className="ch-info">Статус, партнерство</span>*/}
              </div>
            </td>
            <td>{getSum(largeCircleValueCenter(mainString, userDataPersonal.birth))}</td>
            <td>{getSum(largeCircleValueCenter(mainString, userDataPersonal.birth))}</td>
            <td>
              {getSum(
                getSum(largeCircleValueCenter(mainString, userDataPersonal.birth)) +
                  getSum(largeCircleValueCenter(mainString, userDataPersonal.birth))
              )}
            </td>
          </tr>

          <tr className="tr_two">
            <td className="td_number">
              <span>2</span>
            </td>
            <td className="ch-name">
              <div className="tooltip">
                <Tooltip title="Задоволення, творчість">
                  <InfoIcon style={{ fontSize: 20, fill: '#ffff' }} />
                </Tooltip>
              </div>
              <div className="info-wrapper">
                <span>Свадхістана</span>
                {/*<span className="ch-info">Радість, задоволення</span>*/}
              </div>
            </td>

            <td>
              <span>
                {getSum(
                  largeCircleValueCenter(mainString, userDataPersonal.birth) +
                    largeCircleValue5(mainString, userDataPersonal.birth)
                )}
              </span>
            </td>
            <td>
              <span>
                {getSum(
                  largeCircleValueCenter(mainString, userDataPersonal.birth) +
                    largeCircleValue8(mainString, userDataPersonal.birth)
                )}
              </span>
            </td>
            <td>
              <span>
                {getSum(
                  getSum(
                    largeCircleValueCenter(mainString, userDataPersonal.birth) +
                      largeCircleValue5(mainString, userDataPersonal.birth)
                  ) +
                    getSum(
                      largeCircleValueCenter(mainString, userDataPersonal.birth) +
                        largeCircleValue8(mainString, userDataPersonal.birth)
                    )
                )}
              </span>
            </td>
          </tr>

          <tr className="tr_one">
            <td className="td_number">
              <span>1</span>
            </td>
            <td className="ch-name">
              <div className="tooltip">
                <Tooltip title="Безпека, базові потреби, здоров&#8216;я, матеріальні цінності">
                  <InfoIcon style={{ fontSize: 20, fill: '#ffff' }} />
                </Tooltip>
              </div>
              <div className="info-wrapper">
                <span>Муладхара</span>
                {/*<span className="ch-info">Тіло, матерія</span>*/}
              </div>
            </td>

            <td>
              <span>{getSum(largeCircleValue5(mainString, userDataPersonal.birth))}</span>
            </td>
            <td>
              <span>{getSum(largeCircleValue8(mainString, userDataPersonal.birth))}</span>
            </td>
            <td>
              <span>
                {getSum(
                  getSum(largeCircleValue5(mainString, userDataPersonal.birth)) +
                    getSum(largeCircleValue8(mainString, userDataPersonal.birth))
                )}
              </span>
            </td>
          </tr>

          <tr className="th_footer tr_sum">
            <td className="td_number">
              <span></span>
            </td>
            <td className="ch-name">
              <div className="tooltip">
                <Tooltip title="загальне енергополе">
                  <InfoIcon style={{ fontSize: 20, fill: '#ffff' }} />
                </Tooltip>
              </div>
              <div className="info-wrapper">
                <span id="td_sum1">Сума</span>
              </div>
            </td>

            <td id="td_sum2">
              {getSum(
                largeCircleValue4(mainString, userDataPersonal.birth) +
                  getSum(
                    largeCircleValue4(mainString, userDataPersonal.birth) +
                      largeCircleValue4(mainString, userDataPersonal.birth) +
                      largeCircleValueCenter(mainString, userDataPersonal.birth)
                  ) +
                  getSum(
                    largeCircleValue4(mainString, userDataPersonal.birth) +
                      largeCircleValueCenter(mainString, userDataPersonal.birth)
                  ) +
                  getSum(
                    largeCircleValueCenter(mainString, userDataPersonal.birth) +
                      largeCircleValue4(mainString, userDataPersonal.birth) +
                      largeCircleValueCenter(mainString, userDataPersonal.birth)
                  ) +
                  getSum(largeCircleValueCenter(mainString, userDataPersonal.birth)) +
                  getSum(
                    largeCircleValueCenter(mainString, userDataPersonal.birth) +
                      largeCircleValue5(mainString, userDataPersonal.birth)
                  ) +
                  getSum(largeCircleValue5(mainString, userDataPersonal.birth))
              )}
            </td>
            <td id="td_sum3">
              {getSum(
                largeCircleValue1(mainString, userDataPersonal.birth) +
                  getSum(
                    largeCircleValue1(mainString, userDataPersonal.birth) +
                      largeCircleValueCenter(mainString, userDataPersonal.birth) +
                      largeCircleValue1(mainString, userDataPersonal.birth)
                  ) +
                  getSum(
                    largeCircleValue1(mainString, userDataPersonal.birth) +
                      largeCircleValueCenter(mainString, userDataPersonal.birth)
                  ) +
                  getSum(
                    largeCircleValue1(mainString, userDataPersonal.birth) +
                      largeCircleValueCenter(mainString, userDataPersonal.birth) +
                      largeCircleValueCenter(mainString, userDataPersonal.birth)
                  ) +
                  getSum(largeCircleValueCenter(mainString, userDataPersonal.birth)) +
                  getSum(
                    largeCircleValueCenter(mainString, userDataPersonal.birth) +
                      largeCircleValue8(mainString, userDataPersonal.birth)
                  ) +
                  getSum(largeCircleValue8(mainString, userDataPersonal.birth))
              )}
            </td>
            <td className="td_sum">
              {getSum(
                getSum(
                  largeCircleValue4(mainString, userDataPersonal.birth) +
                    largeCircleValue1(mainString, userDataPersonal.birth)
                ) +
                  getSum(
                    getSum(
                      largeCircleValue4(mainString, userDataPersonal.birth) +
                        largeCircleValue4(mainString, userDataPersonal.birth) +
                        largeCircleValueCenter(mainString, userDataPersonal.birth)
                    ) +
                      getSum(
                        largeCircleValue1(mainString, userDataPersonal.birth) +
                          largeCircleValueCenter(mainString, userDataPersonal.birth) +
                          largeCircleValue1(mainString, userDataPersonal.birth)
                      )
                  ) +
                  getSum(
                    getSum(
                      largeCircleValue4(mainString, userDataPersonal.birth) +
                        largeCircleValueCenter(mainString, userDataPersonal.birth)
                    ) +
                      getSum(
                        largeCircleValue1(mainString, userDataPersonal.birth) +
                          largeCircleValueCenter(mainString, userDataPersonal.birth)
                      )
                  ) +
                  getSum(
                    getSum(
                      largeCircleValueCenter(mainString, userDataPersonal.birth) +
                        largeCircleValue4(mainString, userDataPersonal.birth) +
                        largeCircleValueCenter(mainString, userDataPersonal.birth)
                    ) +
                      getSum(
                        largeCircleValue1(mainString, userDataPersonal.birth) +
                          largeCircleValueCenter(mainString, userDataPersonal.birth) +
                          largeCircleValueCenter(mainString, userDataPersonal.birth)
                      )
                  ) +
                  getSum(
                    getSum(largeCircleValueCenter(mainString, userDataPersonal.birth)) +
                      getSum(largeCircleValueCenter(mainString, userDataPersonal.birth))
                  ) +
                  getSum(
                    getSum(
                      largeCircleValueCenter(mainString, userDataPersonal.birth) +
                        largeCircleValue5(mainString, userDataPersonal.birth)
                    ) +
                      getSum(
                        largeCircleValueCenter(mainString, userDataPersonal.birth) +
                          largeCircleValue8(mainString, userDataPersonal.birth)
                      )
                  ) +
                  getSum(
                    getSum(largeCircleValue5(mainString, userDataPersonal.birth)) +
                      getSum(largeCircleValue8(mainString, userDataPersonal.birth))
                  )
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
