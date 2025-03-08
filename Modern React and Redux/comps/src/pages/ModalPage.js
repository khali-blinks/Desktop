import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
        );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Here is an important information for you to accept   
            </p> 
        </Modal>
        );

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis dolor, euismod eu mattis sed, tincidunt ut turpis. Phasellus lacus odio, sodales non auctor at, ornare ut est. Pellentesque elementum mauris eu odio suscipit condimentum. Curabitur ullamcorper neque eros, in dignissim mauris ornare ut. Sed varius, diam eu feugiat pellentesque, augue purus lobortis nunc, tristique tincidunt magna mauris at dolor. Duis non ultrices nisi, ultricies imperdiet enim. Donec iaculis ipsum at orci scelerisque, a vulputate ante cursus. Cras suscipit dignissim sapien, nec vehicula odio vulputate in. Sed condimentum arcu et turpis dapibus ornare. Aliquam erat volutpat. Sed non arcu et ligula pretium volutpat at eu felis. In ac justo in massa viverra iaculis. Etiam malesuada egestas arcu non dapibus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis dolor, euismod eu mattis sed, tincidunt ut turpis. Phasellus lacus odio, sodales non auctor at, ornare ut est. Pellentesque elementum mauris eu odio suscipit condimentum. Curabitur ullamcorper neque eros, in dignissim mauris ornare ut. Sed varius, diam eu feugiat pellentesque, augue purus lobortis nunc, tristique tincidunt magna mauris at dolor. Duis non ultrices nisi, ultricies imperdiet enim. Donec iaculis ipsum at orci scelerisque, a vulputate ante cursus. Cras suscipit dignissim sapien, nec vehicula odio vulputate in. Sed condimentum arcu et turpis dapibus ornare. Aliquam erat volutpat. Sed non arcu et ligula pretium volutpat at eu felis. In ac justo in massa viverra iaculis. Etiam malesuada egestas arcu non dapibus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis dolor, euismod eu mattis sed, tincidunt ut turpis. Phasellus lacus odio, sodales non auctor at, ornare ut est. Pellentesque elementum mauris eu odio suscipit condimentum. Curabitur ullamcorper neque eros, in dignissim mauris ornare ut. Sed varius, diam eu feugiat pellentesque, augue purus lobortis nunc, tristique tincidunt magna mauris at dolor. Duis non ultrices nisi, ultricies imperdiet enim. Donec iaculis ipsum at orci scelerisque, a vulputate ante cursus. Cras suscipit dignissim sapien, nec vehicula odio vulputate in. Sed condimentum arcu et turpis dapibus ornare. Aliquam erat volutpat. Sed non arcu et ligula pretium volutpat at eu felis. In ac justo in massa viverra iaculis. Etiam malesuada egestas arcu non dapibus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis dolor, euismod eu mattis sed, tincidunt ut turpis. Phasellus lacus odio, sodales non auctor at, ornare ut est. Pellentesque elementum mauris eu odio suscipit condimentum. Curabitur ullamcorper neque eros, in dignissim mauris ornare ut. Sed varius, diam eu feugiat pellentesque, augue purus lobortis nunc, tristique tincidunt magna mauris at dolor. Duis non ultrices nisi, ultricies imperdiet enim. Donec iaculis ipsum at orci scelerisque, a vulputate ante cursus. Cras suscipit dignissim sapien, nec vehicula odio vulputate in. Sed condimentum arcu et turpis dapibus ornare. Aliquam erat volutpat. Sed non arcu et ligula pretium volutpat at eu felis. In ac justo in massa viverra iaculis. Etiam malesuada egestas arcu non dapibus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis dolor, euismod eu mattis sed, tincidunt ut turpis. Phasellus lacus odio, sodales non auctor at, ornare ut est. Pellentesque elementum mauris eu odio suscipit condimentum. Curabitur ullamcorper neque eros, in dignissim mauris ornare ut. Sed varius, diam eu feugiat pellentesque, augue purus lobortis nunc, tristique tincidunt magna mauris at dolor. Duis non ultrices nisi, ultricies imperdiet enim. Donec iaculis ipsum at orci scelerisque, a vulputate ante cursus. Cras suscipit dignissim sapien, nec vehicula odio vulputate in. Sed condimentum arcu et turpis dapibus ornare. Aliquam erat volutpat. Sed non arcu et ligula pretium volutpat at eu felis. In ac justo in massa viverra iaculis. Etiam malesuada egestas arcu non dapibus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis dolor, euismod eu mattis sed, tincidunt ut turpis. Phasellus lacus odio, sodales non auctor at, ornare ut est. Pellentesque elementum mauris eu odio suscipit condimentum. Curabitur ullamcorper neque eros, in dignissim mauris ornare ut. Sed varius, diam eu feugiat pellentesque, augue purus lobortis nunc, tristique tincidunt magna mauris at dolor. Duis non ultrices nisi, ultricies imperdiet enim. Donec iaculis ipsum at orci scelerisque, a vulputate ante cursus. Cras suscipit dignissim sapien, nec vehicula odio vulputate in. Sed condimentum arcu et turpis dapibus ornare. Aliquam erat volutpat. Sed non arcu et ligula pretium volutpat at eu felis. In ac justo in massa viverra iaculis. Etiam malesuada egestas arcu non dapibus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis dolor, euismod eu mattis sed, tincidunt ut turpis. Phasellus lacus odio, sodales non auctor at, ornare ut est. Pellentesque elementum mauris eu odio suscipit condimentum. Curabitur ullamcorper neque eros, in dignissim mauris ornare ut. Sed varius, diam eu feugiat pellentesque, augue purus lobortis nunc, tristique tincidunt magna mauris at dolor. Duis non ultrices nisi, ultricies imperdiet enim. Donec iaculis ipsum at orci scelerisque, a vulputate ante cursus. Cras suscipit dignissim sapien, nec vehicula odio vulputate in. Sed condimentum arcu et turpis dapibus ornare. Aliquam erat volutpat. Sed non arcu et ligula pretium volutpat at eu felis. In ac justo in massa viverra iaculis. Etiam malesuada egestas arcu non dapibus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis dolor, euismod eu mattis sed, tincidunt ut turpis. Phasellus lacus odio, sodales non auctor at, ornare ut est. Pellentesque elementum mauris eu odio suscipit condimentum. Curabitur ullamcorper neque eros, in dignissim mauris ornare ut. Sed varius, diam eu feugiat pellentesque, augue purus lobortis nunc, tristique tincidunt magna mauris at dolor. Duis non ultrices nisi, ultricies imperdiet enim. Donec iaculis ipsum at orci scelerisque, a vulputate ante cursus. Cras suscipit dignissim sapien, nec vehicula odio vulputate in. Sed condimentum arcu et turpis dapibus ornare. Aliquam erat volutpat. Sed non arcu et ligula pretium volutpat at eu felis. In ac justo in massa viverra iaculis. Etiam malesuada egestas arcu non dapibus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis dolor, euismod eu mattis sed, tincidunt ut turpis. Phasellus lacus odio, sodales non auctor at, ornare ut est. Pellentesque elementum mauris eu odio suscipit condimentum. Curabitur ullamcorper neque eros, in dignissim mauris ornare ut. Sed varius, diam eu feugiat pellentesque, augue purus lobortis nunc, tristique tincidunt magna mauris at dolor. Duis non ultrices nisi, ultricies imperdiet enim. Donec iaculis ipsum at orci scelerisque, a vulputate ante cursus. Cras suscipit dignissim sapien, nec vehicula odio vulputate in. Sed condimentum arcu et turpis dapibus ornare. Aliquam erat volutpat. Sed non arcu et ligula pretium volutpat at eu felis. In ac justo in massa viverra iaculis. Etiam malesuada egestas arcu non dapibus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis dolor, euismod eu mattis sed, tincidunt ut turpis. Phasellus lacus odio, sodales non auctor at, ornare ut est. Pellentesque elementum mauris eu odio suscipit condimentum. Curabitur ullamcorper neque eros, in dignissim mauris ornare ut. Sed varius, diam eu feugiat pellentesque, augue purus lobortis nunc, tristique tincidunt magna mauris at dolor. Duis non ultrices nisi, ultricies imperdiet enim. Donec iaculis ipsum at orci scelerisque, a vulputate ante cursus. Cras suscipit dignissim sapien, nec vehicula odio vulputate in. Sed condimentum arcu et turpis dapibus ornare. Aliquam erat volutpat. Sed non arcu et ligula pretium volutpat at eu felis. In ac justo in massa viverra iaculis. Etiam malesuada egestas arcu non dapibus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis dolor, euismod eu mattis sed, tincidunt ut turpis. Phasellus lacus odio, sodales non auctor at, ornare ut est. Pellentesque elementum mauris eu odio suscipit condimentum. Curabitur ullamcorper neque eros, in dignissim mauris ornare ut. Sed varius, diam eu feugiat pellentesque, augue purus lobortis nunc, tristique tincidunt magna mauris at dolor. Duis non ultrices nisi, ultricies imperdiet enim. Donec iaculis ipsum at orci scelerisque, a vulputate ante cursus. Cras suscipit dignissim sapien, nec vehicula odio vulputate in. Sed condimentum arcu et turpis dapibus ornare. Aliquam erat volutpat. Sed non arcu et ligula pretium volutpat at eu felis. In ac justo in massa viverra iaculis. Etiam malesuada egestas arcu non dapibus.
            </p>
        </div>
    );
};

export default ModalPage;